import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestionMapping
 */
export class HaleyQuestionMapping extends VITAL_Node {
  public readonly haleyQuestionMappingLabel?: string;
  public readonly haleyQuestionMappingTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQuestionMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionMappingLabel',
        tsPropertyName: 'haleyQuestionMappingLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionMappingTypeURI',
        tsPropertyName: 'haleyQuestionMappingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
