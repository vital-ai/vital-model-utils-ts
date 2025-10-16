import { HaleyAnswerInstance } from './haleyAnswerInstance.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswerInstance
 */
export class HaleyTaxonomyAnswerInstance extends HaleyAnswerInstance {
  public readonly taxonomyAnswerValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyTaxonomyAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue',
        tsPropertyName: 'taxonomyAnswerValue',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
