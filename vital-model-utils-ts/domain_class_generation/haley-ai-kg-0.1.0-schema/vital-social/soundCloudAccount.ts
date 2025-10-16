import { SocialMediaAccount } from './socialMediaAccount.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#SoundCloudAccount
 */
export class SoundCloudAccount extends SocialMediaAccount {
  public readonly country?: string;
  public readonly favoriteCount?: number;
  public readonly socialUsername?: string;
  public readonly permalinkURL?: string;
  public readonly permalink?: string;
  public readonly myspaceName?: string;
  public readonly playlistsCount?: number;
  public readonly discogsName?: string;
  public readonly websiteTitle?: string;
  public readonly website?: string;
  public readonly socialDescription?: string;
  public readonly tracksCount?: number;
  public readonly refreshToken?: string;
  public readonly followingCount?: number;
  public readonly city?: string;
  public readonly soundCloudID?: number;
  public readonly expiresIn?: number;
  public readonly followersCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SoundCloudAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCountry',
        tsPropertyName: 'country',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFavoriteCount',
        tsPropertyName: 'favoriteCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialUsername',
        tsPropertyName: 'socialUsername',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPermalinkURL',
        tsPropertyName: 'permalinkURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPermalink',
        tsPropertyName: 'permalink',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasMyspaceName',
        tsPropertyName: 'myspaceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPlaylistsCount',
        tsPropertyName: 'playlistsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasDiscogsName',
        tsPropertyName: 'discogsName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasWebsiteTitle',
        tsPropertyName: 'websiteTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasWebsite',
        tsPropertyName: 'website',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTracksCount',
        tsPropertyName: 'tracksCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRefreshToken',
        tsPropertyName: 'refreshToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowingCount',
        tsPropertyName: 'followingCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCity',
        tsPropertyName: 'city',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSoundCloudID',
        tsPropertyName: 'soundCloudID',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowersCount',
        tsPropertyName: 'followersCount',
        type: 'number',
        required: false
      }
    ];
  }


}
