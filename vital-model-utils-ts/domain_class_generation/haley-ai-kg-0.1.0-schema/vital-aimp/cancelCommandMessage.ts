import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CancelCommandMessage
 */
export class CancelCommandMessage extends UserInterfaceCommandMessage {
  public readonly cancelCommandMessageURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CancelCommandMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCancelCommandMessageURI',
        tsPropertyName: 'cancelCommandMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
