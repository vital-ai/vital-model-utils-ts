import { Question } from './question.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentQuestion
 */
export class PaymentQuestion extends Question {
  public readonly publicKey?: string;
  public readonly provider?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for PaymentQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPublicKey',
        tsPropertyName: 'publicKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProvider',
        tsPropertyName: 'provider',
        type: 'string',
        required: false
      }
    ];
  }


}
