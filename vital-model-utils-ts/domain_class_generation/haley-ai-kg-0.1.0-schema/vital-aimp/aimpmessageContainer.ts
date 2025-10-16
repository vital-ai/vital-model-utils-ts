import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessageContainer
 */
export class AIMPMessageContainer extends VITAL_Node {
  public readonly recipientIdentity?: string;
  public readonly sourceAccountURI?: string;
  public readonly senderIdentity?: string;
  public readonly sourceAccountName?: string;
  public readonly accountURI?: string;
  public readonly sourceUserID?: string;
  public readonly destinationAccountURI?: string;
  public readonly aIMPMessageContainerTypeURI?: string;
  public readonly loginURI?: string;
  public readonly destinationAccountName?: string;
  public readonly sourceUserName?: string;
  public readonly serializedMessage?: string;
  public readonly channelURI?: string;
  public readonly replyTo?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPMessageContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipientIdentity',
        tsPropertyName: 'recipientIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountURI',
        tsPropertyName: 'sourceAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderIdentity',
        tsPropertyName: 'senderIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountName',
        tsPropertyName: 'sourceAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserID',
        tsPropertyName: 'sourceUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountURI',
        tsPropertyName: 'destinationAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContainerTypeURI',
        tsPropertyName: 'aIMPMessageContainerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountName',
        tsPropertyName: 'destinationAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserName',
        tsPropertyName: 'sourceUserName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSerializedMessage',
        tsPropertyName: 'serializedMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isReplyTo',
        tsPropertyName: 'replyTo',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
