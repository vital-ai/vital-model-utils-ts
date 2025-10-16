import { HaleyAnswerInstance } from './haleyAnswerInstance.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance
 */
export class HaleySignatureAnswerInstance extends HaleyAnswerInstance {
  public readonly answerInstanceImageWidth?: string;
  public readonly signatureAnswerValue?: string;
  public readonly anchorAnswerInstance?: boolean;
  public readonly answerInstanceImageHeight?: string;
  public readonly answerInstanceImageURL?: string;
  public readonly haleySignatureAnswerStyleURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleySignatureAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageWidth',
        tsPropertyName: 'answerInstanceImageWidth',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue',
        tsPropertyName: 'signatureAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance',
        tsPropertyName: 'anchorAnswerInstance',
        type: 'boolean',
        required: false
      },
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI',
        tsPropertyName: 'haleySignatureAnswerStyleURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
