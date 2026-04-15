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
  VitalSignsGraphInstance
} from '../types/graph.types.js';

/**
 * VitalSigns JSONL Processor
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
   * Process an in-memory array of JSON objects with class registry
   */
  static processObjects(
    jsonObjects: Record<string, any>[],
    classRegistry: VitalSignsClassRegistry
  ): VitalSignsGraphInstance {
    const graphInstance: VitalSignsGraphInstance = {
      nodes: new Map(),
      edges: new Map(),
      objectsByType: new Map()
    };

    for (const jsonData of jsonObjects) {
      try {
        const vitalType = VitalSignsConverter.autoDetectType(jsonData);
        if (!vitalType) continue;

        const ClassConstructor = classRegistry.get(vitalType);
        if (!ClassConstructor) continue;

        const uri = this.extractURI(jsonData);
        if (!uri) continue;

        const result = VitalSignsConverter.toInstance(jsonData, ClassConstructor);
        this.addToGraphInstance(graphInstance, result.instance);
      } catch (error) {
        console.warn(`Error processing object: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    return graphInstance;
  }

  /**
   * Process instances file (like instances.jsonl) with generic objects
   */
  static async processInstancesFile(
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
            const jsonData = JSON.parse(line) as Record<string, any>;
            
            if (!jsonData['URI'] || !jsonData['type']) {
              continue;
            }

            // Create a generic VitalSigns object for enumeration instances
            const instance = this.createGenericInstance(jsonData);
            this.addToGraphInstance(graphInstance, instance);

          } catch (error) {
            console.warn(`Error processing line: ${error instanceof Error ? error.message : String(error)}`);
          }
        }
      }

      return graphInstance;
    } catch (error) {
      throw new Error(`Failed to process instances file: ${error instanceof Error ? error.message : String(error)}`);
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
            const jsonData = JSON.parse(line) as Record<string, any>;
            
            if (!jsonData['URI'] || !jsonData['type']) {
              continue;
            }

            const instance = this.createGenericInstance(jsonData);
            instances.set(jsonData['URI'], instance);

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
    if (jsonData['URI']) {
      return jsonData['URI'];
    }
    return null;
  }

  /**
   * Add instance to appropriate collection in graph instance
   */
  static addToGraphInstance(graphInstance: VitalSignsGraphInstance, instance: VitalSignsObject): void {
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
  private static createGenericInstance(jsonData: Record<string, any>): VitalSignsObject {
    return new GenericVitalSignsObject(jsonData['URI'], jsonData['type'], jsonData);
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
      if (key !== 'URI' && key !== 'type' && key !== 'types') {
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
