import { Answer } from './answer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TrueFalseAnswer
 */
export class TrueFalseAnswer extends Answer {
  public readonly booleanValue?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TrueFalseAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBooleanValue',
        tsPropertyName: 'booleanValue',
        type: 'boolean',
        required: false
      }
    ];
  }


}
