import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ShoppingCart
 */
export class ShoppingCart extends Card {
  public readonly shippingFee?: number;
  public readonly tax?: number;
  public readonly quantityData?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ShoppingCart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShippingFee',
        tsPropertyName: 'shippingFee',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTax',
        tsPropertyName: 'tax',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuantityData',
        tsPropertyName: 'quantityData',
        type: 'string',
        required: false
      }
    ];
  }


}
