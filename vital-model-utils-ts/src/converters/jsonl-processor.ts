import * as fs from 'fs';
import * as readline from 'readline';
import { VitalSignsObject } from '../core/vital-signs-object.js';
import { VITAL_Node_Base } from '../core/vital-node-base.js';
import { VITAL_Edge_Base } from '../core/vital-edge-base.js';
import { VITAL_HyperNode_Base } from '../core/vital-hyper-node-base.js';
import { VITAL_HyperEdge_Base } from '../core/vital-hyper-edge-base.js';
import { VITAL_GraphContainerObject_Base } from '../core/vital-graph-container-object-base.js';
import { VitalSignsConverter } from './vitalsigns-converter.js';
import {
  VitalSignsClassRegistry,
  ProcessingStats,
  JsonLDObject,
  VitalSignsGraphInstance
} from '../types/graph.types.js';

/**
 * VitalSigns JSON-LD JSONL Processor
 */
export class VitalSignsJsonlProcessor {

  /**
   * Process JSONL file with class registry
   */
  static async processFile(
    filePath: string,
    classRegistry: VitalSignsClassRegistry
  ): Promise<VitalSignsGraphInstance> {
    const stats: ProcessingStats = {
      totalObjects: 0,
      processedObjects: 0,
      skippedObjects: 0,
      errorObjects: 0,
      processingTime: 0,
      objectsByType: {}
    };

    const startTime = Date.now();
    const graphInstance: VitalSignsGraphInstance = {
      nodes: new Map(),
      edges: new Map(),
      objectsByType: new Map()
    };

    try {
      const fileStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      for await (const line of rl) {
        if (line.trim()) {
          stats.totalObjects++;
          try {
            const jsonData = JSON.parse(line);
            const vitalType = VitalSignsConverter.autoDetectType(jsonData);
            
            if (!vitalType) {
              stats.skippedObjects++;
              continue;
            }

            const ClassConstructor = classRegistry.get(vitalType);
            if (!ClassConstructor) {
              stats.skippedObjects++;
              continue;
            }

            const uri = this.extractURI(jsonData);
            if (!uri) {
              stats.skippedObjects++;
              continue;
            }

            const result = VitalSignsConverter.toInstance(jsonData, ClassConstructor);
            const instance = result.instance;

            // Add to appropriate collection
            this.addToGraphInstance(graphInstance, instance);
            
            // Update statistics
            stats.processedObjects++;
            stats.objectsByType[vitalType] = (stats.objectsByType[vitalType] || 0) + 1;

          } catch (error) {
            stats.errorObjects++;
            console.warn(`Error processing line: ${error instanceof Error ? error.message : String(error)}`);
          }
        }
      }

      stats.processingTime = Date.now() - startTime;
      console.log(`Processed ${stats.processedObjects}/${stats.totalObjects} objects in ${stats.processingTime}ms`);

      return graphInstance;
    } catch (error) {
      throw new Error(`Failed to process JSONL file: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Process stream with class registry
   */
  static async processStream(
    stream: NodeJS.ReadableStream,
    classRegistry: VitalSignsClassRegistry
  ): Promise<VitalSignsObject[]> {
    const objects: VitalSignsObject[] = [];
    
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {
      if (line.trim()) {
        try {
          const jsonData = JSON.parse(line);
          const vitalType = VitalSignsConverter.autoDetectType(jsonData);
          
          if (!vitalType) continue;

          const ClassConstructor = classRegistry.get(vitalType);
          if (!ClassConstructor) continue;

          const result = VitalSignsConverter.toInstance(jsonData, ClassConstructor);
          objects.push(result.instance);

        } catch (error) {
          console.warn(`Error processing stream line: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }

    return objects;
  }

  /**
   * Process JSON-LD file (like instances.jsonl)
   */
  static async processJsonLDFile(
    filePath: string
  ): Promise<VitalSignsGraphInstance> {
    const graphInstance: VitalSignsGraphInstance = {
      nodes: new Map(),
      edges: new Map(),
      objectsByType: new Map()
    };

    try {
      const fileStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      for await (const line of rl) {
        if (line.trim()) {
          try {
            const jsonLD = JSON.parse(line) as JsonLDObject;
            
            if (!jsonLD['@id'] || !jsonLD['@type']) {
              continue;
            }

            // Create a generic VitalSigns object for enumeration instances
            const instance = this.createGenericInstance(jsonLD);
            this.addToGraphInstance(graphInstance, instance);

          } catch (error) {
            console.warn(`Error processing JSON-LD line: ${error instanceof Error ? error.message : String(error)}`);
          }
        }
      }

      return graphInstance;
    } catch (error) {
      throw new Error(`Failed to process JSON-LD file: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Process file with auto-detection of format
   */
  static async processFileWithAutoDetection(
    filePath: string,
    format?: 'json-ld' | 'vitalsigns' | 'auto'
  ): Promise<VitalSignsGraphInstance> {
    if (format === 'json-ld') {
      return this.processJsonLDFile(filePath);
    }

    // Auto-detect format by reading first line
    const firstLine = await this.readFirstLine(filePath);
    if (!firstLine) {
      throw new Error('Empty file or unable to read first line');
    }

    try {
      const jsonData = JSON.parse(firstLine);
      
      // Check if it's JSON-LD format
      if (jsonData['@id'] && jsonData['@type']) {
        return this.processJsonLDFile(filePath);
      }
      
      // Check if it's VitalSigns format
      if (jsonData['http://vital.ai/ontology/vital-core#vitaltype']) {
        // Would need class registry for full processing
        throw new Error('VitalSigns format requires class registry - use processFile() instead');
      }

      throw new Error('Unrecognized JSON format');
    } catch (error) {
      throw new Error(`Auto-detection failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Handle enumeration/constant instances (most common in instances.jsonl)
   */
  static async processEnumerationInstances(
    filePath: string
  ): Promise<Map<string, VitalSignsObject>> {
    const instances = new Map<string, VitalSignsObject>();

    try {
      const fileStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      for await (const line of rl) {
        if (line.trim()) {
          try {
            const jsonLD = JSON.parse(line) as JsonLDObject;
            
            if (!jsonLD['@id'] || !jsonLD['@type']) {
              continue;
            }

            const instance = this.createGenericInstance(jsonLD);
            instances.set(jsonLD['@id'], instance);

          } catch (error) {
            console.warn(`Error processing enumeration line: ${error instanceof Error ? error.message : String(error)}`);
          }
        }
      }

      return instances;
    } catch (error) {
      throw new Error(`Failed to process enumeration instances: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Extract URI from JSON data
   */
  private static extractURI(jsonData: Record<string, any>): string | null {
    if (jsonData['@id']) {
      return jsonData['@id'];
    }
    // For VitalSigns format, URI might need to be generated or provided separately
    return null;
  }

  /**
   * Add instance to appropriate collection in graph instance
   */
  private static addToGraphInstance(graphInstance: VitalSignsGraphInstance, instance: VitalSignsObject): void {
    // Add to objectsByType map
    const vitalType = instance.vitaltype;
    if (vitalType && !graphInstance.objectsByType.has(vitalType)) {
      graphInstance.objectsByType.set(vitalType, []);
    }
    if (vitalType) {
      graphInstance.objectsByType.get(vitalType)!.push(instance);
    }

    // Add to appropriate nodes or edges collection
    if (instance.URI) {
      if (instance instanceof VITAL_Edge_Base || instance instanceof VITAL_HyperEdge_Base) {
        graphInstance.edges.set(instance.URI, instance as VITAL_Edge_Base | VITAL_HyperEdge_Base);
      } else if (
        instance instanceof VITAL_Node_Base || 
        instance instanceof VITAL_HyperNode_Base || 
        instance instanceof VITAL_GraphContainerObject_Base
      ) {
        graphInstance.nodes.set(instance.URI, instance as VITAL_Node_Base | VITAL_HyperNode_Base | VITAL_GraphContainerObject_Base);
      }
    }
  }

  /**
   * Create a generic VitalSigns instance for enumeration objects
   */
  private static createGenericInstance(jsonLD: JsonLDObject): VitalSignsObject {
    return new GenericVitalSignsObject(jsonLD['@id'], jsonLD['@type'], jsonLD);
  }

  /**
   * Read first line of file for format detection
   */
  private static async readFirstLine(filePath: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath);
      const rl = readline.createInterface({ input: stream });
      
      rl.on('line', (line) => {
        rl.close();
        resolve(line);
      });
      
      rl.on('close', () => {
        resolve(null);
      });
      
      rl.on('error', (error) => {
        reject(error);
      });
    });
  }
}

/**
 * Generic VitalSigns object for enumeration instances
 */
class GenericVitalSignsObject extends VitalSignsObject {
  private data: Record<string, any>;

  constructor(uri: string, vitaltype: string, data: Record<string, any>) {
    super();
    this.URI = uri;
    this.vitaltype = vitaltype;
    this.data = data;
  }

  getPropertyDefinitions() {
    // Generate property definitions from the data
    const properties = [];
    for (const [key, value] of Object.entries(this.data)) {
      if (key !== '@id' && key !== '@type') {
        properties.push({
          propertyURI: key,
          tsPropertyName: key.split('#').pop() || key,
          type: typeof value,
          required: false
        });
      }
    }
    return properties;
  }
}
