import { HaleyRegion } from './haleyRegion.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCountry
 */
export class HaleyCountry extends HaleyRegion {
  public readonly haleyCountryISOCode?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyCountry
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyCountryISOCode',
        tsPropertyName: 'haleyCountryISOCode',
        type: 'string',
        required: false
      }
    ];
  }


}
