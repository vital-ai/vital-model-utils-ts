import { PropertyFact } from './propertyFact.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#StringPropertyFact
 */
export class StringPropertyFact extends PropertyFact {
  public readonly stringValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for StringPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStringValue',
        tsPropertyName: 'stringValue',
        type: 'string',
        required: false
      }
    ];
  }


}
