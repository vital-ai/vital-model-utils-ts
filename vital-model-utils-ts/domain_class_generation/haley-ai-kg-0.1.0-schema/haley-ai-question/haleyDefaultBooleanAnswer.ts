import { HaleyDefaultAnswer } from './haleyDefaultAnswer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultBooleanAnswer
 */
export class HaleyDefaultBooleanAnswer extends HaleyDefaultAnswer {
  public readonly booleanAnswerValue?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDefaultBooleanAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue',
        tsPropertyName: 'booleanAnswerValue',
        type: 'boolean',
        required: false
      }
    ];
  }


}
