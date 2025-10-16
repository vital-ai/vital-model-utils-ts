import { ProcessorEvent } from './processorEvent.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentProcessorEvent
 */
export class PaymentProcessorEvent extends ProcessorEvent {
  public readonly paymentProviderEventType?: string;
  public readonly paymentProcessorEventId?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for PaymentProcessorEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPaymentProviderEventType',
        tsPropertyName: 'paymentProviderEventType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPaymentProcessorEventId',
        tsPropertyName: 'paymentProcessorEventId',
        type: 'string',
        required: false
      }
    ];
  }


}
