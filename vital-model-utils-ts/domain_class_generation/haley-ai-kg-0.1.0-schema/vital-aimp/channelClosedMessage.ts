import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChannelClosedMessage
 */
export class ChannelClosedMessage extends AIMPMessage {
  public readonly childChannelURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ChannelClosedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChildChannelURI',
        tsPropertyName: 'childChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
