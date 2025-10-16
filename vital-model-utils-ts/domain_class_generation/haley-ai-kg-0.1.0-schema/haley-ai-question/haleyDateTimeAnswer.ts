import { HaleyAnswer } from './haleyAnswer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswer
 */
export class HaleyDateTimeAnswer extends HaleyAnswer {
  public readonly anchorAnswer?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDateTimeAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswer',
        tsPropertyName: 'anchorAnswer',
        type: 'boolean',
        required: false
      }
    ];
  }


}
