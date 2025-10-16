import { BaseInteractionTransaction } from './baseInteractionTransaction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ExternalInteractionTransaction
 */
export class ExternalInteractionTransaction extends BaseInteractionTransaction {
  public readonly externalInteractionTotalFee?: number;
  public readonly externalInteractionFee?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ExternalInteractionTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExternalInteractionTotalFee',
        tsPropertyName: 'externalInteractionTotalFee',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExternalInteractionFee',
        tsPropertyName: 'externalInteractionFee',
        type: 'number',
        required: false
      }
    ];
  }


}
