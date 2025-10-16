import { HaleyAnswer } from './haleyAnswer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswer
 */
export class HaleyNumberAnswer extends HaleyAnswer {
  public readonly haleyAnswerSignificantDigits?: number;
  public readonly haleyCurrencyType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyNumberAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerSignificantDigits',
        tsPropertyName: 'haleyAnswerSignificantDigits',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType',
        tsPropertyName: 'haleyCurrencyType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
