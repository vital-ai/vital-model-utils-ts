import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEMail
 */
export class KGEMail extends KGNode {
  public readonly kGEmailSenderName?: string;
  public readonly kGEmailBCCAddressList?: string;
  public readonly kGEmailRecipientName?: string;
  public readonly kGEmailSendDateTime?: string | Date;
  public readonly kGEmailSubject?: string;
  public readonly kGEmailRecipientAddress?: string;
  public readonly kGEmailSummary?: string;
  public readonly kGEmailCCAddressList?: string;
  public readonly kGEmailSenderAddress?: string;
  public readonly kGEMailType?: string;
  public readonly kGEmailToAddressList?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGEMail
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSenderName',
        tsPropertyName: 'kGEmailSenderName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailBCCAddressList',
        tsPropertyName: 'kGEmailBCCAddressList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailRecipientName',
        tsPropertyName: 'kGEmailRecipientName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSendDateTime',
        tsPropertyName: 'kGEmailSendDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSubject',
        tsPropertyName: 'kGEmailSubject',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailRecipientAddress',
        tsPropertyName: 'kGEmailRecipientAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSummary',
        tsPropertyName: 'kGEmailSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailCCAddressList',
        tsPropertyName: 'kGEmailCCAddressList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailSenderAddress',
        tsPropertyName: 'kGEmailSenderAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEMailType',
        tsPropertyName: 'kGEMailType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEmailToAddressList',
        tsPropertyName: 'kGEmailToAddressList',
        type: 'string',
        required: false
      }
    ];
  }


}
