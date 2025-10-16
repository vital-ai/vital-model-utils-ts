import { HaleyAnswerInstance } from './haleyAnswerInstance.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance
 */
export class HaleyFileUploadAnswerInstance extends HaleyAnswerInstance {
  public readonly answerInstanceImageHeight?: string;
  public readonly answerInstanceImageURL?: string;
  public readonly answerInstanceImageWidth?: string;
  public readonly fileAnswerValueURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyFileUploadAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageHeight',
        tsPropertyName: 'answerInstanceImageHeight',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageURL',
        tsPropertyName: 'answerInstanceImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageWidth',
        tsPropertyName: 'answerInstanceImageWidth',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI',
        tsPropertyName: 'fileAnswerValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
