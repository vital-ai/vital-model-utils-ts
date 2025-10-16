import { AIMPEmailMessage } from './aimpemailMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SendEmail
 */
export class SendEmail extends AIMPEmailMessage {
  public readonly messageServiceURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SendEmail
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageServiceURI',
        tsPropertyName: 'messageServiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
