import { SocialMediaAccount } from './socialMediaAccount.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TwitterAccount
 */
export class TwitterAccount extends SocialMediaAccount {
  public readonly followingCount?: number;
  public readonly screenName?: string;
  public readonly tweetsCount?: number;
  public readonly oAuthTokenSecret?: string;
  public readonly socialDescription?: string;
  public readonly twitterID?: number;
  public readonly twitterOAuthToken?: string;
  public readonly followersCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TwitterAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowingCount',
        tsPropertyName: 'followingCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasScreenName',
        tsPropertyName: 'screenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetsCount',
        tsPropertyName: 'tweetsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOAuthTokenSecret',
        tsPropertyName: 'oAuthTokenSecret',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialDescription',
        tsPropertyName: 'socialDescription',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterOAuthToken',
        tsPropertyName: 'twitterOAuthToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowersCount',
        tsPropertyName: 'followersCount',
        type: 'number',
        required: false
      }
    ];
  }


}
