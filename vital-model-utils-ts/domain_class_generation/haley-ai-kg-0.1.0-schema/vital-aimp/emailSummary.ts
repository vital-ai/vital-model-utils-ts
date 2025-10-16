import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailSummary
 */
export class EmailSummary extends VITAL_Node {
  public readonly messageID?: string;
  public readonly subject?: string;
  public readonly bccRecipients?: string;
  public readonly eMailTagURI?: string;
  public readonly accountURI?: string;
  public readonly recipients?: string;
  public readonly attachmentsCount?: number;
  public readonly bodyHtml?: string;
  public readonly sender?: string;
  public readonly category?: string;
  public readonly trackingOpens?: boolean;
  public readonly bodyPlain?: string;
  public readonly eventTimestamp?: number;
  public readonly read?: boolean;
  public readonly ccRecipients?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for EmailSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageID',
        tsPropertyName: 'messageID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubject',
        tsPropertyName: 'subject',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBccRecipients',
        tsPropertyName: 'bccRecipients',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEMailTagURI',
        tsPropertyName: 'eMailTagURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipients',
        tsPropertyName: 'recipients',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAttachmentsCount',
        tsPropertyName: 'attachmentsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBodyHtml',
        tsPropertyName: 'bodyHtml',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSender',
        tsPropertyName: 'sender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCategory',
        tsPropertyName: 'category',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTrackingOpens',
        tsPropertyName: 'trackingOpens',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBodyPlain',
        tsPropertyName: 'bodyPlain',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEventTimestamp',
        tsPropertyName: 'eventTimestamp',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRead',
        tsPropertyName: 'read',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCcRecipients',
        tsPropertyName: 'ccRecipients',
        type: 'string',
        required: false
      }
    ];
  }


}
