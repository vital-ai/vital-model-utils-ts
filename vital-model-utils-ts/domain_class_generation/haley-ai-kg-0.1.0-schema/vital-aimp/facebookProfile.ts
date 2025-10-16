import { EndpointProfile } from './endpointProfile.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookProfile
 */
export class FacebookProfile extends EndpointProfile {
  public readonly firstName?: string;
  public readonly profilePic?: string;
  public readonly facebookID?: string;
  public readonly gender?: string;
  public readonly lastName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FacebookProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFirstName',
        tsPropertyName: 'firstName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProfilePic',
        tsPropertyName: 'profilePic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFacebookID',
        tsPropertyName: 'facebookID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGender',
        tsPropertyName: 'gender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastName',
        tsPropertyName: 'lastName',
        type: 'string',
        required: false
      }
    ];
  }


}
