import { AIMPThing } from './aimpthing.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunityMember
 */
export class AccountOpportunityMember extends AIMPThing {
  public readonly memberEmailAddress?: string;
  public readonly memberEmailAddressValidated?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountOpportunityMember
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMemberEmailAddress',
        tsPropertyName: 'memberEmailAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMemberEmailAddressValidated',
        tsPropertyName: 'memberEmailAddressValidated',
        type: 'boolean',
        required: false
      }
    ];
  }


}
