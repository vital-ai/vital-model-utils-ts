import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyMessage
 */
export class HaleyMessage extends AIMPMessage {
  public readonly directMessageResponse?: boolean;
  public readonly inReplyToScreenName?: string;
  public readonly slackRecipientTeamID?: string;
  public readonly recipient?: string;
  public readonly slackRecipientChannelID?: string;
  public readonly slackResponse?: boolean;
  public readonly tweetResponse?: boolean;
  public readonly generateExemplar?: boolean;
  public readonly inReplyToTweetID?: number;
  public readonly slackRecipientThreadID?: string;
  public readonly slackRecipientUserID?: string;
  public readonly smsResponse?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDirectMessageResponse',
        tsPropertyName: 'directMessageResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToScreenName',
        tsPropertyName: 'inReplyToScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientTeamID',
        tsPropertyName: 'slackRecipientTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipient',
        tsPropertyName: 'recipient',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientChannelID',
        tsPropertyName: 'slackRecipientChannelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSlackResponse',
        tsPropertyName: 'slackResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTweetResponse',
        tsPropertyName: 'tweetResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isGenerateExemplar',
        tsPropertyName: 'generateExemplar',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToTweetID',
        tsPropertyName: 'inReplyToTweetID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientThreadID',
        tsPropertyName: 'slackRecipientThreadID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID',
        tsPropertyName: 'slackRecipientUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSmsResponse',
        tsPropertyName: 'smsResponse',
        type: 'boolean',
        required: false
      }
    ];
  }


}
