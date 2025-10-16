import { HaleyAnswer } from './haleyAnswer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswer
 */
export class HaleyMultiChoiceAnswer extends HaleyAnswer {
  public readonly answerSetSourceURI?: string;
  public readonly answerSetOptions?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMultiChoiceAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerSetSourceURI',
        tsPropertyName: 'answerSetSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnswerSetOptions',
        tsPropertyName: 'answerSetOptions',
        type: 'boolean',
        required: false
      }
    ];
  }


}
