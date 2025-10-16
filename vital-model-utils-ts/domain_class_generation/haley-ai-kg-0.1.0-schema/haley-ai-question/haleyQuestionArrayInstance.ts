import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestionArrayInstance
 */
export class HaleyQuestionArrayInstance extends VITAL_Node {
  public readonly haleyQuestionArray?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQuestionArrayInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionArray',
        tsPropertyName: 'haleyQuestionArray',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
