import { UserTextMessage } from './userTextMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SlackTextMessage
 */
export class SlackTextMessage extends UserTextMessage {
  public readonly slackFileShareName?: string;
  public readonly slackMessageJSON?: string;
  public readonly slackTeamID?: string;
  public readonly slackFileShareURL?: string;
  public readonly slackUserID?: string;
  public readonly slackEventType?: string;
  public readonly slackChannelID?: string;
  public readonly slackThreadID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SlackTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackFileShareName',
        tsPropertyName: 'slackFileShareName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackMessageJSON',
        tsPropertyName: 'slackMessageJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackTeamID',
        tsPropertyName: 'slackTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackFileShareURL',
        tsPropertyName: 'slackFileShareURL',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackChannelID',
        tsPropertyName: 'slackChannelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackThreadID',
        tsPropertyName: 'slackThreadID',
        type: 'string',
        required: false
      }
    ];
  }


}
