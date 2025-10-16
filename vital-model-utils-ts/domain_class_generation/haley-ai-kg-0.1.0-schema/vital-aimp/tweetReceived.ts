import { TwitterMessage } from './twitterMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TweetReceived
 */
export class TweetReceived extends TwitterMessage {
  public readonly campaignURIs?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TweetReceived
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCampaignURIs',
        tsPropertyName: 'campaignURIs',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
