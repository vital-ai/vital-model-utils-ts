/**
 * Helper utilities for VitalSigns processing
 */
export class VitalSignsHelpers {

  /**
   * Extract class name from VitalSigns type URI
   */
  static extractClassName(vitalTypeURI: string): string {
    const parts = vitalTypeURI.split('#');
    return parts.length > 1 ? parts[1] : vitalTypeURI;
  }

  /**
   * Extract namespace from VitalSigns type URI
   */
  static extractNamespace(vitalTypeURI: string): string {
    const parts = vitalTypeURI.split('#');
    return parts.length > 1 ? parts[0] : '';
  }

  /**
   * Convert URI to camelCase property name
   */
  static uriToCamelCase(uri: string): string {
    const parts = uri.split('#');
    const propertyName = parts.length > 1 ? parts[1] : uri;
    
    // Remove 'has' prefix if present and convert to camelCase
    const withoutHas = propertyName.replace(/^has/, '');
    return this.toCamelCase(withoutHas);
  }

  /**
   * Convert string to camelCase
   */
  static toCamelCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  /**
   * Convert class name to appropriate filename
   * Handles special cases like VITAL_Node -> vitalNode
   */
  static toFileName(className: string): string {
    // Special handling for classes that start with multiple uppercase letters
    if (/^[A-Z]{2,}/.test(className)) {
      // If it's all caps with underscores (like VITAL_Node), convert to camelCase
      if (className.includes('_')) {
        return className.toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      }
      // If it's just multiple caps at start (like XMLParser), keep first part lowercase
      return className.replace(/^[A-Z]+/, match => 
        match.length > 1 ? match.toLowerCase() : match.toLowerCase()
      );
    }
    
    // For normal PascalCase, convert to camelCase
    return this.toCamelCase(className);
  }

  /**
   * Convert string to PascalCase
   */
  static toPascalCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Generate TypeScript interface name from class name
   */
  static toInterfaceName(className: string): string {
    return `I${className}`;
  }

  /**
   * Generate unique identifier
   */
  static generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Generate VitalSigns URI with UUID
   */
  static generateVitalSignsURI(baseURI: string, className?: string): string {
    const uuid = this.generateUUID();
    const classPrefix = className ? `${className}_` : '';
    return `${baseURI}#${classPrefix}${uuid}`;
  }

  /**
   * Deep clone object
   */
  static deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime()) as unknown as T;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.deepClone(item)) as unknown as T;
    }

    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = this.deepClone(obj[key]);
      }
    }

    return cloned;
  }

  /**
   * Merge objects deeply
   */
  static deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
    const result = this.deepClone(target);

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const sourceValue = source[key];
        const targetValue = result[key];

        if (this.isObject(sourceValue) && this.isObject(targetValue)) {
          result[key] = this.deepMerge(targetValue, sourceValue as any);
        } else {
          result[key] = sourceValue as T[Extract<keyof T, string>];
        }
      }
    }

    return result;
  }

  /**
   * Check if value is a plain object
   */
  static isObject(value: any): value is Record<string, any> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  /**
   * Flatten nested object to dot notation
   */
  static flattenObject(obj: Record<string, any>, prefix: string = ''): Record<string, any> {
    const flattened: Record<string, any> = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        const value = obj[key];

        if (this.isObject(value)) {
          Object.assign(flattened, this.flattenObject(value, newKey));
        } else {
          flattened[newKey] = value;
        }
      }
    }

    return flattened;
  }

  /**
   * Unflatten dot notation object
   */
  static unflattenObject(obj: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const keys = key.split('.');
        let current = result;

        for (let i = 0; i < keys.length - 1; i++) {
          const k = keys[i];
          if (!(k in current)) {
            current[k] = {};
          }
          current = current[k];
        }

        current[keys[keys.length - 1]] = obj[key];
      }
    }

    return result;
  }

  /**
   * Format timestamp to ISO string
   */
  static formatTimestamp(timestamp: number): string {
    return new Date(timestamp).toISOString();
  }

  /**
   * Parse ISO string to timestamp
   */
  static parseTimestamp(isoString: string): number {
    return new Date(isoString).getTime();
  }

  /**
   * Escape string for use in regular expressions
   */
  static escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Truncate string with ellipsis
   */
  static truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + '...';
  }

  /**
   * Debounce function execution
   */
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Throttle function execution
   */
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}
