import { HaleyAnswerInstance } from './haleyAnswerInstance.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance
 */
export class HaleyLongTextAnswerInstance extends HaleyAnswerInstance {
  public readonly longTextAnalyzedAnswerValue?: string;
  public readonly haleyLanguageType?: string;
  public readonly longTextAnswerValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyLongTextAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnalyzedAnswerValue',
        tsPropertyName: 'longTextAnalyzedAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue',
        tsPropertyName: 'longTextAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
