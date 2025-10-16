import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnswerMessage
 */
export class AnswerMessage extends AIMPMessage {
  public readonly helpRequested?: boolean;
  public readonly slackTeamID?: string;
  public readonly slackUserID?: string;
  public readonly slackEventType?: string;
  public readonly answerSkipped?: boolean;
  public readonly slackResponse?: boolean;
  public readonly slackChannelID?: string;
  public readonly goBackSelected?: boolean;
  public readonly slackThreadID?: string;
  public readonly questionClosed?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AnswerMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHelpRequested',
        tsPropertyName: 'helpRequested',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackTeamID',
        tsPropertyName: 'slackTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackUserID',
        tsPropertyName: 'slackUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackEventType',
        tsPropertyName: 'slackEventType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAnswerSkipped',
        tsPropertyName: 'answerSkipped',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSlackResponse',
        tsPropertyName: 'slackResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackChannelID',
        tsPropertyName: 'slackChannelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGoBackSelected',
        tsPropertyName: 'goBackSelected',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackThreadID',
        tsPropertyName: 'slackThreadID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionClosed',
        tsPropertyName: 'questionClosed',
        type: 'boolean',
        required: false
      }
    ];
  }


}
