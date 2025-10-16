import { HaleyAnswerInstance } from './haleyAnswerInstance.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswerInstance
 */
export class HaleyDateTimeAnswerInstance extends HaleyAnswerInstance {
  public readonly dateTimeAnswerValue?: string | Date;
  public readonly anchorAnswerInstance?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDateTimeAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue',
        tsPropertyName: 'dateTimeAnswerValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance',
        tsPropertyName: 'anchorAnswerInstance',
        type: 'boolean',
        required: false
      }
    ];
  }


}
