import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTimezoneType
 */
export class HaleyTimezoneType extends VITAL_Node {
  public readonly standardTimeUTCType?: string;
  public readonly daylightSavingsZone?: boolean;
  public readonly daylightSavingsTimeUTCType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyTimezoneType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasStandardTimeUTCType',
        tsPropertyName: 'standardTimeUTCType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDaylightSavingsZone',
        tsPropertyName: 'daylightSavingsZone',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDaylightSavingsTimeUTCType',
        tsPropertyName: 'daylightSavingsTimeUTCType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
