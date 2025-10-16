import { BaseInteractionPart } from './baseInteractionPart.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountInteractionPart
 */
export class AccountInteractionPart extends BaseInteractionPart {
  public readonly senderAccountURI?: string;
  public readonly recipientAccountURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountInteractionPart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderAccountURI',
        tsPropertyName: 'senderAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipientAccountURI',
        tsPropertyName: 'recipientAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
