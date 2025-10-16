import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#SocialMediaAccount
 */
export class SocialMediaAccount extends VITAL_Node {
  public readonly accessToken?: string;
  public readonly tokenValid?: boolean;
  public readonly socialLikeCount?: number;
  public readonly pictureURL?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SocialMediaAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAccessToken',
        tsPropertyName: 'accessToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#isTokenValid',
        tsPropertyName: 'tokenValid',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLikeCount',
        tsPropertyName: 'socialLikeCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPictureURL',
        tsPropertyName: 'pictureURL',
        type: 'string',
        required: false
      }
    ];
  }


}
