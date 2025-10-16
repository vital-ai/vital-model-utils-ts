import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInPersonProfile
 */
export class LinkedInPersonProfile extends VITAL_Node {
  public readonly linkedInFirstName?: string;
  public readonly linkedInCompanyURL?: string;
  public readonly linkedInProfilePageURL?: string;
  public readonly linkedInJSON?: string;
  public readonly linkedInLastName?: string;
  public readonly linkedInOccupation?: string;
  public readonly linkedInCompanyName?: string;
  public readonly linkedinProfileImageURL?: string;
  public readonly linkedInEmailAddress?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for LinkedInPersonProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInFirstName',
        tsPropertyName: 'linkedInFirstName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyURL',
        tsPropertyName: 'linkedInCompanyURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInProfilePageURL',
        tsPropertyName: 'linkedInProfilePageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInJSON',
        tsPropertyName: 'linkedInJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInLastName',
        tsPropertyName: 'linkedInLastName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInOccupation',
        tsPropertyName: 'linkedInOccupation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyName',
        tsPropertyName: 'linkedInCompanyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedinProfileImageURL',
        tsPropertyName: 'linkedinProfileImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInEmailAddress',
        tsPropertyName: 'linkedInEmailAddress',
        type: 'string',
        required: false
      }
    ];
  }


}
