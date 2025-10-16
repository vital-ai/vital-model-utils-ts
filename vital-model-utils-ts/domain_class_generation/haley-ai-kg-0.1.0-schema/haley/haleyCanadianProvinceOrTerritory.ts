import { HaleyCountryDivision } from './haleyCountryDivision.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory
 */
export class HaleyCanadianProvinceOrTerritory extends HaleyCountryDivision {
  public readonly postalAbbreviation?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyCanadianProvinceOrTerritory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPostalAbbreviation',
        tsPropertyName: 'postalAbbreviation',
        type: 'string',
        required: false
      }
    ];
  }


}
