import { SocialMediaAccount } from './socialMediaAccount.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#YouTubeAccount
 */
export class YouTubeAccount extends SocialMediaAccount {
  public readonly commentCount?: number;
  public readonly country?: string;
  public readonly refreshToken?: string;
  public readonly socialDescription?: string;
  public readonly subscriberCount?: number;
  public readonly channelID?: string;
  public readonly videoCount?: number;
  public readonly expiresIn?: number;
  public readonly viewCount?: number;
  public readonly publishedAt?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for YouTubeAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCommentCount',
        tsPropertyName: 'commentCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCountry',
        tsPropertyName: 'country',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRefreshToken',
        tsPropertyName: 'refreshToken',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSubscriberCount',
        tsPropertyName: 'subscriberCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasChannelID',
        tsPropertyName: 'channelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasVideoCount',
        tsPropertyName: 'videoCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasExpiresIn',
        tsPropertyName: 'expiresIn',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasViewCount',
        tsPropertyName: 'viewCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPublishedAt',
        tsPropertyName: 'publishedAt',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
