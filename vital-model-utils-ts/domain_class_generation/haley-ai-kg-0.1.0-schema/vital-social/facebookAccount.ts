import { SocialMediaAccount } from './socialMediaAccount.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#FacebookAccount
 */
export class FacebookAccount extends SocialMediaAccount {
  public readonly pageFansCountry?: string;
  public readonly socialUsername?: string;
  public readonly facebookCategory?: string;
  public readonly facebookID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FacebookAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPageFansCountry',
        tsPropertyName: 'pageFansCountry',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFacebookCategory',
        tsPropertyName: 'facebookCategory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFacebookID',
        tsPropertyName: 'facebookID',
        type: 'string',
        required: false
      }
    ];
  }


}
