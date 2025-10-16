import { BaseInteractionTransaction } from './baseInteractionTransaction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountInteractionTransaction
 */
export class AccountInteractionTransaction extends BaseInteractionTransaction {
  public readonly accountInteractionFee?: number;
  public readonly accountInteractionTotalFee?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountInteractionTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountInteractionFee',
        tsPropertyName: 'accountInteractionFee',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountInteractionTotalFee',
        tsPropertyName: 'accountInteractionTotalFee',
        type: 'number',
        required: false
      }
    ];
  }


}
