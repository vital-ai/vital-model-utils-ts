import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInCompanyProfile
 */
export class LinkedInCompanyProfile extends VITAL_Node {
  public readonly linkedInCompanyName?: string;
  public readonly linkedInCompanyURL?: string;
  public readonly linkedInJSON?: string;
  public readonly linkedInUniversalName?: string;
  public readonly linkedInCompanyLogoImageURL?: string;
  public readonly linkedInNumberOfEmployees?: number;
  public readonly linkedInIndustry?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for LinkedInCompanyProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyName',
        tsPropertyName: 'linkedInCompanyName',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInJSON',
        tsPropertyName: 'linkedInJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInUniversalName',
        tsPropertyName: 'linkedInUniversalName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyLogoImageURL',
        tsPropertyName: 'linkedInCompanyLogoImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInNumberOfEmployees',
        tsPropertyName: 'linkedInNumberOfEmployees',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInIndustry',
        tsPropertyName: 'linkedInIndustry',
        type: 'string',
        required: false
      }
    ];
  }


}
