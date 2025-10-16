import { VitalSignsObject } from '../core/vital-signs-object.js';
import { VitalSignsPropertyFilter } from '../types/graph.types.js';

/**
 * VitalSigns Filter Engine
 */
export class VitalSignsFilterEngine {

  /**
   * Apply filters to VitalSigns objects
   */
  static applyFilters(
    objects: VitalSignsObject[],
    filters: VitalSignsPropertyFilter[]
  ): VitalSignsObject[] {
    if (!filters || filters.length === 0) {
      return objects;
    }

    return objects.filter(obj => this.matchesAllFilters(obj, filters));
  }

  /**
   * Create a property filter
   */
  static createFilter(
    propertyURI: string,
    operator: string,
    value: any
  ): VitalSignsPropertyFilter {
    const validOperators = ['equals', 'contains', 'startsWith', 'gt', 'lt', 'in', 'exists'];
    
    if (!validOperators.includes(operator)) {
      throw new Error(`Invalid operator: ${operator}. Must be one of: ${validOperators.join(', ')}`);
    }

    return {
      propertyURI,
      operator: operator as VitalSignsPropertyFilter['operator'],
      value
    };
  }

  /**
   * Filter by VitalSigns type
   */
  static filterByVitalType(
    objects: VitalSignsObject[],
    vitalTypes: string[]
  ): VitalSignsObject[] {
    if (!vitalTypes || vitalTypes.length === 0) {
      return objects;
    }

    return objects.filter(obj => obj.vitaltype && vitalTypes.includes(obj.vitaltype));
  }

  /**
   * Filter by timestamp range
   */
  static filterByTimestamp(
    objects: VitalSignsObject[],
    startTime?: number,
    endTime?: number
  ): VitalSignsObject[] {
    return objects.filter(obj => {
      if (!obj.timestamp) {
        return false;
      }

      if (startTime !== undefined && obj.timestamp < startTime) {
        return false;
      }

      if (endTime !== undefined && obj.timestamp > endTime) {
        return false;
      }

      return true;
    });
  }

  /**
   * Filter by active status
   */
  static filterByActive(
    objects: VitalSignsObject[],
    activeOnly: boolean = true
  ): VitalSignsObject[] {
    return objects.filter(obj => {
      if (obj.active === undefined) {
        return !activeOnly; // If no active property, include only if not filtering for active
      }
      return activeOnly ? obj.active : !obj.active;
    });
  }

  /**
   * Filter by property existence
   */
  static filterByPropertyExists(
    objects: VitalSignsObject[],
    propertyURI: string
  ): VitalSignsObject[] {
    return objects.filter(obj => {
      const json = obj.toJSON();
      return json[propertyURI] !== undefined;
    });
  }

  /**
   * Filter by multiple property values (AND logic)
   */
  static filterByProperties(
    objects: VitalSignsObject[],
    propertyFilters: Record<string, any>
  ): VitalSignsObject[] {
    return objects.filter(obj => {
      const json = obj.toJSON();
      
      for (const [propertyURI, expectedValue] of Object.entries(propertyFilters)) {
        if (json[propertyURI] !== expectedValue) {
          return false;
        }
      }
      
      return true;
    });
  }

  /**
   * Advanced text search in object properties
   */
  static textSearch(
    objects: VitalSignsObject[],
    searchTerm: string,
    propertyURIs?: string[]
  ): VitalSignsObject[] {
    const searchLower = searchTerm.toLowerCase();
    
    return objects.filter(obj => {
      const json = obj.toJSON();
      const searchProperties = propertyURIs || Object.keys(json);
      
      for (const propertyURI of searchProperties) {
        const value = json[propertyURI];
        if (typeof value === 'string' && value.toLowerCase().includes(searchLower)) {
          return true;
        }
      }
      
      return false;
    });
  }

  /**
   * Check if object matches all filters
   */
  private static matchesAllFilters(
    obj: VitalSignsObject,
    filters: VitalSignsPropertyFilter[]
  ): boolean {
    const json = obj.toJSON();

    for (const filter of filters) {
      if (!this.matchesFilter(json, filter)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Check if object matches a single filter
   */
  private static matchesFilter(
    json: Record<string, any>,
    filter: VitalSignsPropertyFilter
  ): boolean {
    const propertyValue = json[filter.propertyURI];

    switch (filter.operator) {
      case 'exists':
        return propertyValue !== undefined;

      case 'equals':
        return propertyValue === filter.value;

      case 'contains':
        if (typeof propertyValue === 'string' && typeof filter.value === 'string') {
          return propertyValue.includes(filter.value);
        }
        if (Array.isArray(propertyValue)) {
          return propertyValue.includes(filter.value);
        }
        return false;

      case 'startsWith':
        if (typeof propertyValue === 'string' && typeof filter.value === 'string') {
          return propertyValue.startsWith(filter.value);
        }
        return false;

      case 'gt':
        if (typeof propertyValue === 'number' && typeof filter.value === 'number') {
          return propertyValue > filter.value;
        }
        return false;

      case 'lt':
        if (typeof propertyValue === 'number' && typeof filter.value === 'number') {
          return propertyValue < filter.value;
        }
        return false;

      case 'in':
        if (Array.isArray(filter.value)) {
          return filter.value.includes(propertyValue);
        }
        return false;

      default:
        return false;
    }
  }

  /**
   * Create complex filter combinations
   */
  static combineFilters(
    filters: VitalSignsPropertyFilter[],
    logic: 'AND' | 'OR' = 'AND'
  ): (objects: VitalSignsObject[]) => VitalSignsObject[] {
    return (objects: VitalSignsObject[]) => {
      if (!filters || filters.length === 0) {
        return objects;
      }

      return objects.filter(obj => {
        const json = obj.toJSON();
        
        if (logic === 'AND') {
          return filters.every(filter => this.matchesFilter(json, filter));
        } else {
          return filters.some(filter => this.matchesFilter(json, filter));
        }
      });
    };
  }
}
