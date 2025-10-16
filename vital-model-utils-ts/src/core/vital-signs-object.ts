/**
 * Property definition for VitalSigns objects
 */
export interface VitalSignsPropertyDefinition {
  propertyURI: string;
  tsPropertyName: string;
  type: string;
  required?: boolean;
  format?: string;
}

/**
 * Base VitalSigns Object - common ancestor for all VitalSigns classes
 */
export abstract class VitalSignsObject {
  public uri?: string;
  public vitaltype?: string;
  public timestamp?: number;
  public active?: boolean;

  constructor() {
    // Default constructor - properties will be set by generated classes
  }

  /**
   * Get property definitions for this class (implemented by generated classes)
   */
  abstract getPropertyDefinitions(): VitalSignsPropertyDefinition[];

  /**
   * Get all property definitions including inherited ones by walking the class hierarchy
   */
  getAllPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    const allProperties: VitalSignsPropertyDefinition[] = [];
    const seen = new Set<string>();

    // Walk up the prototype chain to collect all property definitions
    let currentClass = this.constructor;
    while (currentClass && currentClass.prototype instanceof VitalSignsObject) {
      const instance = currentClass.prototype as VitalSignsObject;
      if (instance.getPropertyDefinitions) {
        const properties = instance.getPropertyDefinitions();
        for (const prop of properties) {
          if (!seen.has(prop.propertyURI)) {
            allProperties.push(prop);
            seen.add(prop.propertyURI);
          }
        }
      }
      currentClass = Object.getPrototypeOf(currentClass);
    }

    // Add the current class's properties
    const currentProperties = this.getPropertyDefinitions();
    for (const prop of currentProperties) {
      if (!seen.has(prop.propertyURI)) {
        allProperties.push(prop);
        seen.add(prop.propertyURI);
      }
    }

    return allProperties;
  }

  /**
   * Convert instance to JSON with VitalSigns URI-based properties
   */
  toJSON(): Record<string, any> {
    const json: Record<string, any> = {
      'http://vital.ai/ontology/vital-core#vitaltype': this.vitaltype
    };

    // Add URI if present (using @id for JSON-LD compatibility)
    if (this.uri) {
      json['@id'] = this.uri;
    }

    // Get all property definitions including inherited ones
    const allProperties = this.getAllPropertyDefinitions();

    // Convert each property to JSON using the property definitions
    for (const propDef of allProperties) {
      const value = (this as any)[propDef.tsPropertyName];
      if (value !== undefined) {
        json[propDef.propertyURI] = value;
      }
    }

    return json;
  }

  /**
   * Populate instance from JSON with VitalSigns URI-based properties
   */
  fromJSON(data: Record<string, any>): void {
    // Get all property definitions including inherited ones
    const allProperties = this.getAllPropertyDefinitions();

    // Set each property from JSON using the property definitions
    for (const propDef of allProperties) {
      if (data[propDef.propertyURI] !== undefined) {
        (this as any)[propDef.tsPropertyName] = data[propDef.propertyURI];
      }
    }

    // Set vitaltype if present
    if (data['http://vital.ai/ontology/vital-core#vitaltype']) {
      this.vitaltype = data['http://vital.ai/ontology/vital-core#vitaltype'];
    }
  }

  /**
   * Convert instance to Map representation (helpful when batch converting VS objects to JSON string)
   */
  toMap(): Map<string, any> {
    const map = new Map<string, any>();
    
    // Add vitaltype
    map.set('http://vital.ai/ontology/vital-core#vitaltype', this.vitaltype);
    
    // Add URI if present
    if (this.uri) {
      map.set('@id', this.uri);
    }

    // Get all property definitions including inherited ones
    const allProperties = this.getAllPropertyDefinitions();

    // Add each property to map using the property definitions
    for (const propDef of allProperties) {
      const value = (this as any)[propDef.tsPropertyName];
      if (value !== undefined) {
        map.set(propDef.propertyURI, value);
      }
    }

    return map;
  }

  /**
   * Populate instance from Map representation (helpful when batch parsing JSON string into VS objects)
   */
  fromMap(map: Map<string, any>): void {
    // Get all property definitions including inherited ones
    const allProperties = this.getAllPropertyDefinitions();

    // Set each property from map using the property definitions
    for (const propDef of allProperties) {
      if (map.has(propDef.propertyURI)) {
        (this as any)[propDef.tsPropertyName] = map.get(propDef.propertyURI);
      }
    }

    // Set vitaltype if present
    if (map.has('http://vital.ai/ontology/vital-core#vitaltype')) {
      this.vitaltype = map.get('http://vital.ai/ontology/vital-core#vitaltype');
    }

    // Set URI if present
    if (map.has('@id')) {
      this.uri = map.get('@id');
    }
  }
}
