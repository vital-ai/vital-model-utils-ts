import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping
 */
export class HaleyAnswerTypeClassMapping extends VITAL_Node {
  public readonly haleyMappingFunctionURI?: string;
  public readonly answerTypePropertyValueConstraintString?: string;
  public readonly mappedConstantStringValue?: string;
  public readonly mappedAnswerTypeURI?: string;
  public readonly haleyMappingTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerTypeClassMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI',
        tsPropertyName: 'haleyMappingFunctionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypePropertyValueConstraintString',
        tsPropertyName: 'answerTypePropertyValueConstraintString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappedConstantStringValue',
        tsPropertyName: 'mappedConstantStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappedAnswerTypeURI',
        tsPropertyName: 'mappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingTypeURI',
        tsPropertyName: 'haleyMappingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
