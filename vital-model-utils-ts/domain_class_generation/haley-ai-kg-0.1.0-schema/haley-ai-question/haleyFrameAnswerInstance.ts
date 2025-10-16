import { HaleyAnswerInstance } from './haleyAnswerInstance.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerInstance
 */
export class HaleyFrameAnswerInstance extends HaleyAnswerInstance {
  public readonly frameAnswerValueEncoding?: string;
  public readonly frameAnswerValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyFrameAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValueEncoding',
        tsPropertyName: 'frameAnswerValueEncoding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValue',
        tsPropertyName: 'frameAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
