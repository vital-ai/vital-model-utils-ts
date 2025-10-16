import { HaleyRegion } from './haleyRegion.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUSCounty
 */
export class HaleyUSCounty extends HaleyRegion {
  /** URI reference to one of: HaleyUSStateOrTerritory, HaleyCanadianProvinceOrTerritory */
  public readonly divisionRegionURI?: http://vital.ai/ontology/haley#HaleyUSStateOrTerritory | http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory;
  public readonly fIPSCode?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyUSCounty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDivisionRegionURI',
        tsPropertyName: 'divisionRegionURI',
        type: 'http://vital.ai/ontology/haley#HaleyUSStateOrTerritory | http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasFIPSCode',
        tsPropertyName: 'fIPSCode',
        type: 'string',
        required: false
      }
    ];
  }


}
