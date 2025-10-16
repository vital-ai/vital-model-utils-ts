import { HaleyMessage } from './haleyMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPResponseMessage
 */
export class AIMPResponseMessage extends HaleyMessage {
  public readonly aIMPIntentType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPIntentType',
        tsPropertyName: 'aIMPIntentType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
