import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountOrganization
 */
export class HaleyAccountOrganization extends VITAL_Node {
  public readonly accountOrganizationIdentifier?: string;
  public readonly accountOrganizationExternalIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccountOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOrganizationIdentifier',
        tsPropertyName: 'accountOrganizationIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOrganizationExternalIdentifier',
        tsPropertyName: 'accountOrganizationExternalIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
