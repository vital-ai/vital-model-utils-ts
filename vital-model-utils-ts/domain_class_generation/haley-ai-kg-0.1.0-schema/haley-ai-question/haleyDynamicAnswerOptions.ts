import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDynamicAnswerOptions
 */
export class HaleyDynamicAnswerOptions extends VITAL_Node {
  public readonly dynamicAnswerOptionsRow?: string;
  public readonly dynamicAnswerOptionsGroup?: string;
  public readonly dynamicAnswerOptionsAnswer?: string;
  public readonly dynamicAnswerOptionsRowRow?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDynamicAnswerOptions
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRow',
        tsPropertyName: 'dynamicAnswerOptionsRow',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsGroup',
        tsPropertyName: 'dynamicAnswerOptionsGroup',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsAnswer',
        tsPropertyName: 'dynamicAnswerOptionsAnswer',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDynamicAnswerOptionsRowRow',
        tsPropertyName: 'dynamicAnswerOptionsRowRow',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
