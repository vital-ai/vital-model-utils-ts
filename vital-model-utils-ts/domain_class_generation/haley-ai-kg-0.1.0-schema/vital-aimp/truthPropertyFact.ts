import { PropertyFact } from './propertyFact.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TruthPropertyFact
 */
export class TruthPropertyFact extends PropertyFact {
  public readonly truthValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TruthPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTruthValue',
        tsPropertyName: 'truthValue',
        type: 'string',
        required: false
      }
    ];
  }


}
