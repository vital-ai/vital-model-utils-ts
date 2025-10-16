import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunityInvitation
 */
export class AccountOpportunityInvitation extends VITAL_Node {
  public readonly accountOpportunityInvitationStatusURI?: string;
  public readonly accountOpportunityInvitationCode?: string;
  public readonly accountOpportunityInvitationDate?: string | Date;
  public readonly accountOpportunityInvitationEmail?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountOpportunityInvitation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationStatusURI',
        tsPropertyName: 'accountOpportunityInvitationStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationCode',
        tsPropertyName: 'accountOpportunityInvitationCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationDate',
        tsPropertyName: 'accountOpportunityInvitationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityInvitationEmail',
        tsPropertyName: 'accountOpportunityInvitationEmail',
        type: 'string',
        required: false
      }
    ];
  }


}
