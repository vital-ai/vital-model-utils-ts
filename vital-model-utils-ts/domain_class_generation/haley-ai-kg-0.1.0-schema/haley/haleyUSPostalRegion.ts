import { HaleyRegion } from './haleyRegion.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUSPostalRegion
 */
export class HaleyUSPostalRegion extends HaleyRegion {
  public readonly postalCodePlusFour?: string;
  public readonly timeZoneIdentifier?: string;
  public readonly countyRegionURI?: string;
  /** URI reference to one of: HaleyUSStateOrTerritory, HaleyCanadianProvinceOrTerritory */
  public readonly divisionRegionURI?: http://vital.ai/ontology/haley#HaleyUSStateOrTerritory | http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory;
  public readonly fIPSCode?: string;
  public readonly postalCode?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyUSPostalRegion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPostalCodePlusFour',
        tsPropertyName: 'postalCodePlusFour',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasTimeZoneIdentifier',
        tsPropertyName: 'timeZoneIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCountyRegionURI',
        tsPropertyName: 'countyRegionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPostalCode',
        tsPropertyName: 'postalCode',
        type: 'string',
        required: false
      }
    ];
  }


}
