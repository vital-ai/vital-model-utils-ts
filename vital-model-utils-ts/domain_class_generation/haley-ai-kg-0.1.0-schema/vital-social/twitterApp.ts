import { SocialMediaApp } from './socialMediaApp.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TwitterApp
 */
export class TwitterApp extends SocialMediaApp {
  public readonly consumerKey?: string;
  public readonly twitterID?: number;
  public readonly consumerSecret?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TwitterApp
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasConsumerKey',
        tsPropertyName: 'consumerKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterID',
        tsPropertyName: 'twitterID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasConsumerSecret',
        tsPropertyName: 'consumerSecret',
        type: 'string',
        required: false
      }
    ];
  }


}
