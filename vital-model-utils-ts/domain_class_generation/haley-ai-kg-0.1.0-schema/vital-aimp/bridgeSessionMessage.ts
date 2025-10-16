import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BridgeSessionMessage
 */
export class BridgeSessionMessage extends AIMPMessage {
  public readonly bridgeSequenceNumber?: number;
  public readonly bridgeSessionID?: string;
  public readonly serializedBridgeMessage?: string;
  public readonly bridgeAccountURI?: string;
  public readonly bridgeChannelURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for BridgeSessionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeSequenceNumber',
        tsPropertyName: 'bridgeSequenceNumber',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeSessionID',
        tsPropertyName: 'bridgeSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSerializedBridgeMessage',
        tsPropertyName: 'serializedBridgeMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeAccountURI',
        tsPropertyName: 'bridgeAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeChannelURI',
        tsPropertyName: 'bridgeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
