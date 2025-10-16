import { Payment } from './payment.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#StripePayment
 */
export class StripePayment extends Payment {
  public readonly json?: string;
  public readonly token?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for StripePayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJson',
        tsPropertyName: 'json',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasToken',
        tsPropertyName: 'token',
        type: 'string',
        required: false
      }
    ];
  }


}
