import { SocialMediaAccount } from './socialMediaAccount.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#InstagramAccount
 */
export class InstagramAccount extends SocialMediaAccount {
  public readonly bio?: string;
  public readonly socialUsername?: string;
  public readonly followingCount?: number;
  public readonly website?: string;
  public readonly followersCount?: number;
  public readonly mediaCount?: number;
  public readonly instagramID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for InstagramAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasBio',
        tsPropertyName: 'bio',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialUsername',
        tsPropertyName: 'socialUsername',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasWebsite',
        tsPropertyName: 'website',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowersCount',
        tsPropertyName: 'followersCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasMediaCount',
        tsPropertyName: 'mediaCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInstagramID',
        tsPropertyName: 'instagramID',
        type: 'string',
        required: false
      }
    ];
  }


}
