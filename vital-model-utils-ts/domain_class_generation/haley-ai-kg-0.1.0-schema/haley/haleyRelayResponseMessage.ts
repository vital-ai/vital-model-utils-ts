import { HaleyResponseMessage } from './haleyResponseMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRelayResponseMessage
 */
export class HaleyRelayResponseMessage extends HaleyResponseMessage {
  public readonly resultSequence?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyRelayResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResultSequence',
        tsPropertyName: 'resultSequence',
        type: 'number',
        required: false
      }
    ];
  }


}
