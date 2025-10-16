import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QuestionMessage
 */
export class QuestionMessage extends AIMPMessage {
  public readonly previousAnswer?: string;
  public readonly slackRecipientTeamID?: string;
  public readonly parentQuestionURI?: string;
  public readonly questionContent?: string;
  public readonly index?: number;
  public readonly slackRecipientChannelID?: string;
  public readonly slackResponse?: boolean;
  public readonly questionPreviousContent?: string;
  public readonly slackRecipientThreadID?: string;
  public readonly questionOption?: string;
  public readonly slackRecipientUserID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for QuestionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousAnswer',
        tsPropertyName: 'previousAnswer',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParentQuestionURI',
        tsPropertyName: 'parentQuestionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionContent',
        tsPropertyName: 'questionContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionPreviousContent',
        tsPropertyName: 'questionPreviousContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientThreadID',
        tsPropertyName: 'slackRecipientThreadID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionOption',
        tsPropertyName: 'questionOption',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackRecipientUserID',
        tsPropertyName: 'slackRecipientUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
