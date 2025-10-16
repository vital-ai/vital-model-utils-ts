import { Document } from '../vital-nlp/document.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#DirectMessage
 */
export class DirectMessage extends Document {
  public readonly directMessageID?: number;
  public readonly authorScreenName?: string;
  public readonly recipientScreenName?: string;
  public readonly authorName?: string;
  public readonly authorID?: number;
  public readonly recipientID?: number;
  public readonly recipientName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DirectMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasDirectMessageID',
        tsPropertyName: 'directMessageID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorScreenName',
        tsPropertyName: 'authorScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRecipientScreenName',
        tsPropertyName: 'recipientScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorName',
        tsPropertyName: 'authorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorID',
        tsPropertyName: 'authorID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRecipientID',
        tsPropertyName: 'recipientID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRecipientName',
        tsPropertyName: 'recipientName',
        type: 'string',
        required: false
      }
    ];
  }


}
