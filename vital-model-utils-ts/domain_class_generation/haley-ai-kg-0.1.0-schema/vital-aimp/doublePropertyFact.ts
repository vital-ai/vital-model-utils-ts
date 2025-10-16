import { PropertyFact } from './propertyFact.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DoublePropertyFact
 */
export class DoublePropertyFact extends PropertyFact {
  public readonly doubleValue?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DoublePropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDoubleValue',
        tsPropertyName: 'doubleValue',
        type: 'number',
        required: false
      }
    ];
  }


}
