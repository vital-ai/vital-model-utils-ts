import { EndpointProfile } from './endpointProfile.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TwitterProfile
 */
export class TwitterProfile extends EndpointProfile {
  public readonly twitterID?: number;
  public readonly screenName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TwitterProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterID',
        tsPropertyName: 'twitterID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasScreenName',
        tsPropertyName: 'screenName',
        type: 'string',
        required: false
      }
    ];
  }


}
