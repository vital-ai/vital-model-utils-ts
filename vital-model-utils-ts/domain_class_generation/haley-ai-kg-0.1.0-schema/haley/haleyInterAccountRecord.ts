import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyInterAccountRecord
 */
export class HaleyInterAccountRecord extends VITAL_Node {
  public readonly interAccountRequestURI?: string;
  public readonly interAccountSerializedRequest?: string;
  public readonly interAccountRequestDateTime?: string | Date;
  public readonly interAccountSenderAccountURI?: string;
  public readonly interAccountDestinationChannelURI?: string;
  public readonly interAccountReplyMessageURI?: string;
  public readonly interAccountRecipientAccountURI?: string;
  public readonly interAccountRecipientLoginURI?: string;
  public readonly interAccountResponseURI?: string;
  public readonly interAccountSenderLoginURI?: string;
  public readonly interAccountSourceChannelURI?: string;
  public readonly interAccountResponseDateTime?: string | Date;
  public readonly interAccountSerializedResponse?: string;
  public readonly interAccountSenderMessageURI?: string;
  public readonly interAccountResponseStatusURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInterAccountRecord
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRequestURI',
        tsPropertyName: 'interAccountRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSerializedRequest',
        tsPropertyName: 'interAccountSerializedRequest',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRequestDateTime',
        tsPropertyName: 'interAccountRequestDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSenderAccountURI',
        tsPropertyName: 'interAccountSenderAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountDestinationChannelURI',
        tsPropertyName: 'interAccountDestinationChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountReplyMessageURI',
        tsPropertyName: 'interAccountReplyMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRecipientAccountURI',
        tsPropertyName: 'interAccountRecipientAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRecipientLoginURI',
        tsPropertyName: 'interAccountRecipientLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountResponseURI',
        tsPropertyName: 'interAccountResponseURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSenderLoginURI',
        tsPropertyName: 'interAccountSenderLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSourceChannelURI',
        tsPropertyName: 'interAccountSourceChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountResponseDateTime',
        tsPropertyName: 'interAccountResponseDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSerializedResponse',
        tsPropertyName: 'interAccountSerializedResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSenderMessageURI',
        tsPropertyName: 'interAccountSenderMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountResponseStatusURI',
        tsPropertyName: 'interAccountResponseStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
