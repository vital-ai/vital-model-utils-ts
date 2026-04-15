import { VitalSignsSchema } from '../types/schema.types.js';

/**
 * Validation utilities for VitalSigns
 */
export class VitalSignsValidation {
  
  /**
   * Validate VitalSigns schema structure
   */
  static validateSchema(schema: VitalSignsSchema): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check required fields
    if (!schema.$schema) {
      errors.push('Missing $schema field');
    }

    if (!schema.title) {
      errors.push('Missing title field');
    }

    if (!schema.domainURI) {
      errors.push('Missing domainURI field');
    }

    if (!schema.name) {
      errors.push('Missing name field');
    }

    if (!schema.version) {
      errors.push('Missing version field');
    }

    if (!schema.typeScriptConfig) {
      errors.push('Missing typeScriptConfig field');
    } else {
      if (!schema.typeScriptConfig.namespace) {
        errors.push('Missing typeScriptConfig.namespace field');
      }

      if (!schema.typeScriptConfig.exportFormat) {
        errors.push('Missing typeScriptConfig.exportFormat field');
      }
    }

    if (!schema.$defs) {
      errors.push('Missing $defs field');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate URI format
   */
  static isValidURI(uri: string): boolean {
    try {
      new URL(uri);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validate VitalSigns type URI
   */
  static isValidVitalType(vitalType: string): boolean {
    return this.isValidURI(vitalType) && vitalType.includes('vital.ai/ontology');
  }

  /**
   * Validate property URI
   */
  static isValidPropertyURI(propertyURI: string): boolean {
    return this.isValidURI(propertyURI) && propertyURI.includes('#');
  }

  /**
   * Validate VitalSigns JSON object structure
   */
  static validateVitalSignsJson(obj: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (typeof obj !== 'object' || obj === null) {
      errors.push('Object must be a non-null object');
      return { valid: false, errors };
    }

    // Validate URI field
    if (!obj['URI']) {
      errors.push('Missing URI field');
    } else if (typeof obj['URI'] !== 'string') {
      errors.push('URI must be a string');
    } else if (!this.isValidURI(obj['URI'])) {
      errors.push('URI must be a valid URI');
    }

    // Validate type field (short key or full URI key)
    const vitaltype = obj['type'] || obj['http://vital.ai/ontology/vital-core#vitaltype'];
    if (!vitaltype) {
      errors.push('Missing type field');
    } else if (typeof vitaltype !== 'string') {
      errors.push('type must be a string');
    } else if (!this.isValidVitalType(vitaltype)) {
      errors.push('type must be a valid VitalSigns type URI');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Sanitize property name for TypeScript
   */
  static sanitizePropertyName(name: string): string {
    // Remove invalid characters and ensure valid TypeScript identifier
    return name
      .replace(/[^a-zA-Z0-9_$]/g, '_')
      .replace(/^[0-9]/, '_$&') // Prefix with underscore if starts with number
      .replace(/^$/, '_empty'); // Handle empty string
  }

  /**
   * Validate TypeScript property name
   */
  static isValidTSPropertyName(name: string): boolean {
    // Check if it's a valid TypeScript identifier
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) && !this.isReservedWord(name);
  }

  /**
   * Check if word is a TypeScript/JavaScript reserved word
   */
  static isReservedWord(word: string): boolean {
    const reservedWords = [
      'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
      'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally',
      'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 'null',
      'return', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof',
      'var', 'void', 'while', 'with', 'yield', 'let', 'static', 'implements',
      'interface', 'package', 'private', 'protected', 'public', 'abstract',
      'boolean', 'byte', 'char', 'double', 'final', 'float', 'goto', 'int',
      'long', 'native', 'short', 'synchronized', 'throws', 'transient', 'volatile'
    ];

    return reservedWords.includes(word.toLowerCase());
  }
}
