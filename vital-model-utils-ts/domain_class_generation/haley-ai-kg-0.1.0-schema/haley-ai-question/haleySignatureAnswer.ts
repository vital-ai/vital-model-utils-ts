import { HaleyAnswer } from './haleyAnswer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswer
 */
export class HaleySignatureAnswer extends HaleyAnswer {
  public readonly haleySignatureAnswerStyleURI?: string;
  public readonly anchorAnswer?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleySignatureAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI',
        tsPropertyName: 'haleySignatureAnswerStyleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswer',
        tsPropertyName: 'anchorAnswer',
        type: 'boolean',
        required: false
      }
    ];
  }


}
