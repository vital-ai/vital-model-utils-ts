import { HaleyDefaultAnswer } from './haleyDefaultAnswer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiTaxonomyAnswer
 */
export class HaleyDefaultMultiTaxonomyAnswer extends HaleyDefaultAnswer {
  public readonly multiTaxonomyAnswerValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDefaultMultiTaxonomyAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue',
        tsPropertyName: 'multiTaxonomyAnswerValue',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
