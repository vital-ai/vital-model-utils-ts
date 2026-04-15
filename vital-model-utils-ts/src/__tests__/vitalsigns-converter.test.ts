import { VitalSignsConverter } from '../converters/vitalsigns-converter';
import { VitalSignsObject, VitalSignsPropertyDefinition } from '../core/vital-signs-object';

// Test implementation of VitalSignsObject
class TestVitalSignsObject extends VitalSignsObject {
  constructor(uri: string, vitaltype: string) {
    super();
    this.URI = uri;
    this.vitaltype = vitaltype;
  }

  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      // Test class has no additional properties
    ];
  }
}

describe('VitalSignsConverter', () => {
  describe('autoDetectType', () => {
    it('should detect short type field', () => {
      const json = {
        'URI': 'http://example.com/test',
        'type': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.autoDetectType(json);
      expect(result).toBe('http://vital.ai/ontology/test#TestClass');
    });

    it('should detect full URI vitaltype key', () => {
      const vitalSignsJson = {
        'http://vital.ai/ontology/vital-core#vitaltype': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.autoDetectType(vitalSignsJson);
      expect(result).toBe('http://vital.ai/ontology/test#TestClass');
    });

    it('should prefer full URI key over short type key', () => {
      const json = {
        'http://vital.ai/ontology/vital-core#vitaltype': 'http://vital.ai/ontology/test#FullURI',
        'type': 'http://vital.ai/ontology/test#ShortType'
      };

      const result = VitalSignsConverter.autoDetectType(json);
      expect(result).toBe('http://vital.ai/ontology/test#FullURI');
    });

    it('should return null for unrecognized format', () => {
      const unknownJson = {
        'someProperty': 'someValue'
      };

      const result = VitalSignsConverter.autoDetectType(unknownJson);
      expect(result).toBeNull();
    });
  });

  describe('toInstance', () => {
    it('should convert VitalSigns JSON to instance using short type key', () => {
      const json = {
        'URI': 'http://example.com/test',
        'type': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.toInstance(json, TestVitalSignsObject);
      
      expect(result.instance).toBeInstanceOf(TestVitalSignsObject);
      expect(result.instance.URI).toBe('http://example.com/test');
      expect(result.instance.vitaltype).toBe('http://vital.ai/ontology/test#TestClass');
      expect(result.warnings).toEqual([]);
    });

    it('should convert VitalSigns JSON to instance using full URI key', () => {
      const json = {
        'URI': 'http://example.com/test',
        'http://vital.ai/ontology/vital-core#vitaltype': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.toInstance(json, TestVitalSignsObject);
      
      expect(result.instance).toBeInstanceOf(TestVitalSignsObject);
      expect(result.instance.URI).toBe('http://example.com/test');
      expect(result.instance.vitaltype).toBe('http://vital.ai/ontology/test#TestClass');
    });

    it('should throw error for missing URI', () => {
      const invalidJson = {
        'type': 'http://vital.ai/ontology/test#TestClass'
      };

      expect(() => {
        VitalSignsConverter.toInstance(invalidJson, TestVitalSignsObject);
      }).toThrow('No URI found in JSON data');
    });

    it('should throw error for missing vitaltype', () => {
      const invalidJson = {
        'URI': 'http://example.com/test'
      };

      expect(() => {
        VitalSignsConverter.toInstance(invalidJson, TestVitalSignsObject);
      }).toThrow('Unrecognized JSON format');
    });
  });

  describe('normalizePropertyValues', () => {
    it('should normalize single-element arrays', () => {
      const input = {
        'property1': ['single value'],
        'property2': ['value1', 'value2'],
        'property3': 'not an array'
      };

      const result = VitalSignsConverter.normalizePropertyValues(input);
      
      expect(result).toEqual({
        'property1': 'single value',
        'property2': ['value1', 'value2'],
        'property3': 'not an array'
      });
    });
  });
});
