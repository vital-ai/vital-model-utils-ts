import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTimezoneUTCType
 */
export class HaleyTimezoneUTCType extends VITAL_Node {
  public readonly timezoneUTCDelta?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyTimezoneUTCType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTimezoneUTCDelta',
        tsPropertyName: 'timezoneUTCDelta',
        type: 'number',
        required: false
      }
    ];
  }


}
