/**
 * VitalSigns Schema Definition
 */
export interface VitalSignsSchema {
  $schema: string;
  title: string;
  domainURI: string;
  name: string;
  version: string;
  domainOWLHash?: string;
  vitalsignsVersion?: string;
  parents?: string[];
  typeScriptConfig: {
    namespace: string;
    exportFormat: 'interface' | 'class';
    dateTimeFormat?: string;
    generateUnionTypes: boolean;
    unionTypeStrategy: 'branded-strings' | 'literal';
    cardinalityValidation?: boolean;
    phase2Features?: boolean;
  };
  $defs: Record<string, JSONSchema>;
}

/**
 * JSON Schema definition
 */
export interface JSONSchema {
  type?: string | string[];
  title?: string;
  description?: string;
  properties?: Record<string, JSONSchemaProperty>;
  additionalProperties?: boolean;
  allOf?: JSONSchemaReference[];
  $ref?: string;
  format?: string;
  unionTypes?: string[];
  tsUnionTypeNames?: string[];
  tsPropertyName?: string;
}

/**
 * JSON Schema property definition
 */
export interface JSONSchemaProperty {
  type?: string | string[];
  format?: string;
  description?: string;
  tsPropertyName?: string;
  unionTypes?: string[];
  tsUnionTypeNames?: string[];
  items?: JSONSchemaProperty;
  properties?: Record<string, JSONSchemaProperty>;
  $ref?: string;
}

/**
 * JSON Schema reference for allOf inheritance
 */
export interface JSONSchemaReference {
  $ref?: string;
  type?: string;
  properties?: Record<string, JSONSchemaProperty>;
  additionalProperties?: boolean;
}

/**
 * Property mapping from URI to TypeScript property name
 */
export interface PropertyMapping {
  propertyURI: string;
  tsPropertyName: string;
  type: string;
  format?: string;
  description?: string;
  unionTypes?: string[];
  required?: boolean;
  items?: {
    type: string;
    format?: string;
  };
}

/**
 * Class definition extracted from schema
 */
export interface VitalSignsClassDefinition {
  className: string;
  classURI: string;
  baseClass: string;
  properties: PropertyMapping[];
  description?: string;
  inheritance: string[];
}
