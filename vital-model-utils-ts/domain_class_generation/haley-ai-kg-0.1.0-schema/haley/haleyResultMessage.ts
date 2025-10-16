import { HaleyResponseMessage } from './haleyResponseMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyResultMessage
 */
export class HaleyResultMessage extends HaleyResponseMessage {
  public readonly haleyOffset?: number;
  public readonly haleyLimit?: number;
  public readonly resultSequence?: number;
  public readonly haleyTotalResults?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyResultMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyOffset',
        tsPropertyName: 'haleyOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyLimit',
        tsPropertyName: 'haleyLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResultSequence',
        tsPropertyName: 'resultSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyTotalResults',
        tsPropertyName: 'haleyTotalResults',
        type: 'number',
        required: false
      }
    ];
  }


}
