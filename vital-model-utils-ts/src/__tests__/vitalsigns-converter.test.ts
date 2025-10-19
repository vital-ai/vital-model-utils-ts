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
    it('should detect JSON-LD @type', () => {
      const jsonLD = {
        '@id': 'http://example.com/test',
        '@type': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.autoDetectType(jsonLD);
      expect(result).toBe('http://vital.ai/ontology/test#TestClass');
    });

    it('should detect VitalSigns vitaltype', () => {
      const vitalSignsJson = {
        'http://vital.ai/ontology/vital-core#vitaltype': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.autoDetectType(vitalSignsJson);
      expect(result).toBe('http://vital.ai/ontology/test#TestClass');
    });

    it('should return null for unrecognized format', () => {
      const unknownJson = {
        'someProperty': 'someValue'
      };

      const result = VitalSignsConverter.autoDetectType(unknownJson);
      expect(result).toBeNull();
    });
  });

  describe('fromJsonLD', () => {
    it('should convert JSON-LD to VitalSigns JSON', () => {
      const jsonLD = {
        '@id': 'http://example.com/test',
        '@type': 'http://vital.ai/ontology/test#TestClass',
        'http://vital.ai/ontology/vital-core#hasName': 'Test Name'
      };

      const result = VitalSignsConverter.fromJsonLD(jsonLD);
      
      expect(result).toEqual({
        'http://vital.ai/ontology/vital-core#vitaltype': 'http://vital.ai/ontology/test#TestClass',
        'http://vital.ai/ontology/vital-core#hasName': 'Test Name'
      });
    });

    it('should handle array property values', () => {
      const jsonLD = {
        '@id': 'http://example.com/test',
        '@type': 'http://vital.ai/ontology/test#TestClass',
        'http://www.w3.org/2000/01/rdf-schema#comment': ['Comment 1', 'Comment 2']
      };

      const result = VitalSignsConverter.fromJsonLD(jsonLD);
      
      expect(result['http://www.w3.org/2000/01/rdf-schema#comment']).toEqual(['Comment 1', 'Comment 2']);
    });
  });

  describe('toInstance', () => {
    it('should convert JSON-LD to instance', () => {
      const jsonLD = {
        '@id': 'http://example.com/test',
        '@type': 'http://vital.ai/ontology/test#TestClass'
      };

      const result = VitalSignsConverter.toInstance(jsonLD, TestVitalSignsObject);
      
      expect(result.instance).toBeInstanceOf(TestVitalSignsObject);
      expect(result.instance.URI).toBe('http://example.com/test');
      expect(result.instance.vitaltype).toBe('http://vital.ai/ontology/test#TestClass');
      expect(result.warnings).toEqual([]);
    });

    it('should throw error for missing URI', () => {
      const invalidJson = {
        '@type': 'http://vital.ai/ontology/test#TestClass'
      };

      expect(() => {
        VitalSignsConverter.toInstance(invalidJson, TestVitalSignsObject);
      }).toThrow('No URI found in JSON data');
    });

    it('should throw error for missing vitaltype', () => {
      const invalidJson = {
        '@id': 'http://example.com/test'
      };

      expect(() => {
        VitalSignsConverter.toInstance(invalidJson, TestVitalSignsObject);
      }).toThrow('Unrecognized JSON format - must be JSON-LD or VitalSigns JSON');
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
