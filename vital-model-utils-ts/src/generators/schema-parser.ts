import { VitalSignsSchema, JSONSchema, VitalSignsClassDefinition, PropertyMapping } from '../types/schema.types.js';

/**
 * VitalSigns Schema Parser
 */
export class VitalSignsSchemaParser {

  /**
   * Parse VitalSigns schema and extract class definitions
   */
  static parseSchema(schema: VitalSignsSchema): VitalSignsClassDefinition[] {
    const classes: VitalSignsClassDefinition[] = [];

    for (const [className, classDef] of Object.entries(schema.$defs)) {
      const classDefinition = this.parseClassDefinition(className, classDef, schema);
      classes.push(classDefinition);
    }

    return classes;
  }

  /**
   * Parse individual class definition
   */
  private static parseClassDefinition(
    className: string, 
    classDef: JSONSchema, 
    schema: VitalSignsSchema
  ): VitalSignsClassDefinition {
    // Use classURI field if available, otherwise extract from description or construct
    let classURI = `${schema.domainURI}#${className}`;
    if ((classDef as any).classURI) {
      classURI = (classDef as any).classURI;
    } else if (classDef.description) {
      const uriMatch = classDef.description.match(/VitalSigns class: (http:\/\/vital\.ai\/ontology\/[^#]+#[^\s"]+)/);
      if (uriMatch) {
        classURI = uriMatch[1];
      }
    }
    
    const baseClass = this.determineBaseClass(classDef, className);
    const properties = this.extractProperties(classDef);
    const inheritance = this.extractInheritanceChain(classDef, schema);

    return {
      className,
      classURI,
      baseClass,
      properties,
      ...(classDef.description && { description: classDef.description }),
      inheritance
    };
  }

  /**
   * Determine the base class for a VitalSigns class
   */
  private static determineBaseClass(classDef: JSONSchema, className: string): string {
    // Special case: Top-level 5 core VitalSigns classes extend their abstract base classes
    if (this.isCoreVitalSignsClass(className)) {
      return `${className}_Base`;
    }

    if (!classDef.allOf) {
      return 'VitalSignsObject';
    }

    // Look for $ref to determine base class
    for (const ref of classDef.allOf) {
      if (ref.$ref) {
        const refClass = ref.$ref.replace('#/$defs/', '');
        
        // All other generated classes extend other generated classes (not *_Base classes)
        return refClass;
      }
    }

    return 'VitalSignsObject';
  }

  /**
   * Check if a class is a core VitalSigns class
   */
  private static isCoreVitalSignsClass(className: string): boolean {
    const coreClasses = [
      'VITAL_Node',
      'VITAL_Edge', 
      'VITAL_HyperNode',
      'VITAL_HyperEdge',
      'VITAL_GraphContainerObject'
    ];
    return coreClasses.includes(className);
  }

  /**
   * Extract properties from class definition
   */
  private static extractProperties(classDef: JSONSchema): PropertyMapping[] {
    const properties: PropertyMapping[] = [];

    // Extract properties defined directly on the class (for base classes like VITAL_Node)
    if (classDef.properties) {
      for (const [propertyURI, propDef] of Object.entries(classDef.properties)) {
        const property: PropertyMapping = {
          propertyURI,
          tsPropertyName: propDef.tsPropertyName || this.uriToPropertyName(propertyURI),
          type: this.mapJsonSchemaType(propDef),
          ...(propDef.format && { format: propDef.format }),
          ...(propDef.description && { description: propDef.description }),
          ...(propDef.unionTypes && { unionTypes: propDef.unionTypes }),
          required: false // Default to optional, can be determined from schema
        };
        properties.push(property);
      }
    }

    // Extract properties from allOf array (for derived classes)
    if (classDef.allOf) {
      for (const item of classDef.allOf) {
        if (item.properties) {
          for (const [propertyURI, propDef] of Object.entries(item.properties)) {
            const property: PropertyMapping = {
              propertyURI,
              tsPropertyName: propDef.tsPropertyName || this.uriToPropertyName(propertyURI),
              type: this.mapJsonSchemaType(propDef),
              ...(propDef.format && { format: propDef.format }),
              ...(propDef.description && { description: propDef.description }),
              ...(propDef.unionTypes && { unionTypes: propDef.unionTypes }),
              required: false // Default to optional, can be determined from schema
            };
            properties.push(property);
          }
        }
      }
    }

    return properties;
  }

  /**
   * Extract inheritance chain
   */
  private static extractInheritanceChain(classDef: JSONSchema, schema: VitalSignsSchema): string[] {
    const inheritance: string[] = [];

    if (!classDef.allOf) {
      return inheritance;
    }

    // Follow $ref chain to build inheritance
    for (const ref of classDef.allOf) {
      if (ref.$ref) {
        const refClass = ref.$ref.replace('#/$defs/', '');
        inheritance.push(refClass);
        
        // Recursively follow inheritance if the referenced class exists
        if (schema.$defs[refClass]) {
          const parentInheritance = this.extractInheritanceChain(schema.$defs[refClass], schema);
          inheritance.push(...parentInheritance);
        }
      }
    }

    return Array.from(new Set(inheritance)); // Remove duplicates
  }

  /**
   * Convert URI to property name
   */
  private static uriToPropertyName(uri: string): string {
    const parts = uri.split('#');
    const propertyName = parts.length > 1 ? parts[1] : uri;
    
    // Remove 'has' prefix and convert to camelCase
    const withoutHas = propertyName.replace(/^has/, '');
    return withoutHas.charAt(0).toLowerCase() + withoutHas.slice(1);
  }

  /**
   * Map JSON Schema type to TypeScript type
   */
  private static mapJsonSchemaType(propDef: any): string {
    if (propDef.unionTypes && propDef.unionTypes.length > 0) {
      return propDef.unionTypes.join(' | ');
    }

    switch (propDef.type) {
      case 'string':
        if (propDef.format === 'uri') return 'string'; // Could be URI type
        if (propDef.format === 'date-time') return 'string'; // Could be Date
        return 'string';
      case 'number':
        return 'number';
      case 'integer':
        return 'number';
      case 'boolean':
        return 'boolean';
      case 'array':
        if (propDef.items) {
          const itemType = this.mapJsonSchemaType(propDef.items);
          return `${itemType}[]`;
        }
        return 'any[]';
      case 'object':
        return 'Record<string, any>';
      default:
        return 'any';
    }
  }

  /**
   * Group classes by their base type for organization
   */
  static groupClassesByBaseType(classes: VitalSignsClassDefinition[]): Record<string, VitalSignsClassDefinition[]> {
    const groups: Record<string, VitalSignsClassDefinition[]> = {
      'VITAL_Node_Base': [],
      'VITAL_Edge_Base': [],
      'VITAL_HyperNode_Base': [],
      'VITAL_HyperEdge_Base': [],
      'VITAL_GraphContainerObject_Base': [],
      'Other': []
    };

    for (const classDef of classes) {
      const group = groups[classDef.baseClass] || groups['Other'];
      group.push(classDef);
    }

    return groups;
  }

  /**
   * Create directory structure based on ontology organization
   */
  static createDirectoryStructure(classes: VitalSignsClassDefinition[]): Record<string, string[]> {
    const structure: Record<string, string[]> = {};

    for (const classDef of classes) {
      const ontologyPackage = this.getOntologyPackage(classDef.classURI);
      if (!structure[ontologyPackage]) {
        structure[ontologyPackage] = [];
      }
      structure[ontologyPackage].push(classDef.className);
    }

    return structure;
  }

  /**
   * Get ontology package name from class URI
   */
  private static getOntologyPackage(classURI: string): string {
    // Extract ontology from URI like "http://vital.ai/ontology/haley#ClassName"
    const match = classURI.match(/http:\/\/vital\.ai\/ontology\/([^#]+)#/);
    if (match) {
      const ontologyName = match[1];
      
      // Return the exact ontology name as the package directory
      // This preserves the original ontology structure
      return ontologyName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
    }
    
    return 'other';
  }
}
