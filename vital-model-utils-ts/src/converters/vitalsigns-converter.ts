import { VitalSignsObject } from '../core/vital-signs-object.js';
import { 
  JsonLDObject, 
  VitalSignsJsonObject, 
  ConversionResult
} from '../types/graph.types.js';
import { JSONSchema } from '../types/schema.types.js';

/**
 * VitalSigns JSON-LD to Instance Converter
 */
export class VitalSignsConverter {
  
  /**
   * Convert JSON-LD or VitalSigns JSON to instance
   */
  static toInstance<T extends VitalSignsObject>(
    jsonData: JsonLDObject | VitalSignsJsonObject | Record<string, any>, 
    ClassConstructor: new (uri: string, vitaltype: string, ...args: any[]) => T,
    _schema?: JSONSchema
  ): ConversionResult<T> {
    const warnings: string[] = [];
    const unmappedProperties: string[] = [];

    try {
      // Detect and normalize format
      const normalizedJson = this.normalizeToVitalSignsJson(jsonData);
      
      // Extract URI and vitaltype
      const uri = this.extractURI(jsonData);
      const vitaltype = this.extractVitalType(jsonData);

      if (!uri) {
        throw new Error('No URI found in JSON data');
      }
      if (!vitaltype) {
        throw new Error('No vitaltype found in JSON data');
      }

      // Create instance
      const instance = new ClassConstructor(uri, vitaltype);

      // Populate properties
      instance.fromJSON(normalizedJson);

      return {
        instance,
        warnings,
        unmappedProperties
      };
    } catch (error) {
      throw new Error(`Failed to convert to instance: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Convert instance to VitalSigns JSON
   */
  static fromInstance(instance: VitalSignsObject): VitalSignsJsonObject {
    return instance.toJSON() as VitalSignsJsonObject;
  }

  /**
   * Convert instance to JSON-LD format
   */
  static toJsonLD(instance: VitalSignsObject): JsonLDObject {
    const json = instance.toJSON();
    const jsonLD: JsonLDObject = {
      '@type': json['http://vital.ai/ontology/vital-core#vitaltype']
    } as JsonLDObject;

    // Add @id if URI exists
    if (instance.uri) {
      jsonLD['@id'] = instance.uri;
    }

    // Convert other properties
    for (const [key, value] of Object.entries(json)) {
      if (key !== 'http://vital.ai/ontology/vital-core#vitaltype' && value !== undefined) {
        jsonLD[key] = value;
      }
    }

    return jsonLD;
  }



  /**
   * Convert list of JSON Maps to list of VitalSigns objects (REST service input)
   */
  static fromJsonMapList<T extends VitalSignsObject>(
    jsonMapList: Map<string, any>[],
    ClassConstructor: new (uri: string, vitaltype: string, ...args: any[]) => T
  ): T[] {
    const instances: T[] = [];
    for (const jsonMap of jsonMapList) {
      try {
        const instance = new ClassConstructor('', '');
        instance.fromMap(jsonMap);
        instances.push(instance);
      } catch (error) {
        console.warn(`Failed to convert JSON Map to instance: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    return instances;
  }

  /**
   * Convert list of VitalSigns objects to list of Maps (REST service output)
   */
  static toMapList(instances: VitalSignsObject[]): Map<string, any>[] {
    return instances.map(instance => instance.toMap());
  }


  /**
   * Auto-detect type from @type or vitaltype property
   */
  static autoDetectType(jsonData: Record<string, any>): string | null {
    // Check for JSON-LD @type
    if (jsonData['@type']) {
      return jsonData['@type'];
    }

    // Check for VitalSigns vitaltype
    if (jsonData['http://vital.ai/ontology/vital-core#vitaltype']) {
      return jsonData['http://vital.ai/ontology/vital-core#vitaltype'];
    }

    return null;
  }

  /**
   * Validate against JSON schema
   */
  static validateAgainstSchema(json: Record<string, any>, schema: JSONSchema): boolean {
    // Basic validation - can be enhanced with AJV
    if (schema.type && typeof json !== schema.type) {
      return false;
    }

    if (schema.properties) {
      for (const [key, propSchema] of Object.entries(schema.properties)) {
        if (json[key] !== undefined) {
          if (propSchema.type && typeof json[key] !== propSchema.type) {
            return false;
          }
        }
      }
    }

    return true;
  }

  /**
   * Convert JSON-LD to VitalSigns JSON format
   */
  static fromJsonLD(jsonLD: JsonLDObject): VitalSignsJsonObject {
    const vitalSignsJson: VitalSignsJsonObject = {
      'http://vital.ai/ontology/vital-core#vitaltype': jsonLD['@type']
    };

    // Convert other properties
    for (const [key, value] of Object.entries(jsonLD)) {
      if (key !== '@id' && key !== '@type') {
        vitalSignsJson[key] = this.normalizePropertyValue(value);
      }
    }

    return vitalSignsJson;
  }

  /**
   * Convert VitalSigns JSON to JSON-LD format
   */
  static vitalSignsJsonToJsonLD(vitalSignsJson: VitalSignsJsonObject, uri?: string): JsonLDObject {
    const jsonLD: JsonLDObject = {
      '@type': vitalSignsJson['http://vital.ai/ontology/vital-core#vitaltype']
    } as JsonLDObject;

    // Set @id if provided or try to extract from data
    if (uri) {
      jsonLD['@id'] = uri;
    }

    // Convert other properties
    for (const [key, value] of Object.entries(vitalSignsJson)) {
      if (key !== 'http://vital.ai/ontology/vital-core#vitaltype') {
        jsonLD[key] = value;
      }
    }

    return jsonLD;
  }

  /**
   * Handle @id/@type mapping to uri/vitaltype
   */
  static mapJsonLDToVitalSigns(jsonLD: JsonLDObject): VitalSignsJsonObject {
    return this.fromJsonLD(jsonLD);
  }

  /**
   * Handle uri/vitaltype mapping to @id/@type
   */
  static mapVitalSignsToJsonLD(vitalSigns: VitalSignsJsonObject, uri?: string): JsonLDObject {
    return this.vitalSignsJsonToJsonLD(vitalSigns, uri);
  }

  /**
   * Convert URI-based properties to TypeScript property names using schema
   */
  static mapPropertiesToTS(json: Record<string, any>, schema: JSONSchema): Record<string, any> {
    const mapped: Record<string, any> = {};

    if (!schema.properties) {
      return json;
    }

    for (const [propertyURI, value] of Object.entries(json)) {
      const propSchema = schema.properties[propertyURI];
      if (propSchema && propSchema.tsPropertyName) {
        mapped[propSchema.tsPropertyName] = this.normalizePropertyValue(value);
      } else {
        mapped[propertyURI] = this.normalizePropertyValue(value);
      }
    }

    return mapped;
  }

  /**
   * Convert TypeScript properties back to URI-based properties
   */
  static mapPropertiesFromTS(obj: Record<string, any>, schema: JSONSchema): Record<string, any> {
    const mapped: Record<string, any> = {};

    if (!schema.properties) {
      return obj;
    }

    // Create reverse mapping
    const tsToURI: Record<string, string> = {};
    for (const [propertyURI, propSchema] of Object.entries(schema.properties)) {
      if (propSchema.tsPropertyName) {
        tsToURI[propSchema.tsPropertyName] = propertyURI;
      }
    }

    for (const [key, value] of Object.entries(obj)) {
      const propertyURI = tsToURI[key] || key;
      mapped[propertyURI] = value;
    }

    return mapped;
  }

  /**
   * Handle array property values (JSON-LD can have single values as arrays)
   */
  static normalizePropertyValues(json: Record<string, any>): Record<string, any> {
    const normalized: Record<string, any> = {};

    for (const [key, value] of Object.entries(json)) {
      normalized[key] = this.normalizePropertyValue(value);
    }

    return normalized;
  }

  /**
   * Normalize a single property value
   */
  private static normalizePropertyValue(value: any): any {
    // If it's an array with a single element, extract the element
    if (Array.isArray(value) && value.length === 1) {
      return value[0];
    }
    return value;
  }

  /**
   * Normalize JSON-LD or VitalSigns JSON to standard VitalSigns format
   */
  private static normalizeToVitalSignsJson(jsonData: Record<string, any>): VitalSignsJsonObject {
    // If it's already VitalSigns JSON format
    if (jsonData['http://vital.ai/ontology/vital-core#vitaltype']) {
      return this.normalizePropertyValues(jsonData) as VitalSignsJsonObject;
    }

    // If it's JSON-LD format
    if (jsonData['@type']) {
      return this.fromJsonLD(jsonData as JsonLDObject);
    }

    throw new Error('Unrecognized JSON format - must be JSON-LD or VitalSigns JSON');
  }

  /**
   * Extract URI from JSON data
   */
  private static extractURI(jsonData: Record<string, any>): string | null {
    // JSON-LD format
    if (jsonData['@id']) {
      return jsonData['@id'];
    }

    // VitalSigns format might not have explicit URI in JSON
    // In that case, URI should be provided separately or generated
    return null;
  }

  /**
   * Extract vitaltype from JSON data
   */
  private static extractVitalType(jsonData: Record<string, any>): string | null {
    // JSON-LD format
    if (jsonData['@type']) {
      return jsonData['@type'];
    }

    // VitalSigns format
    if (jsonData['http://vital.ai/ontology/vital-core#vitaltype']) {
      return jsonData['http://vital.ai/ontology/vital-core#vitaltype'];
    }

    return null;
  }
}
