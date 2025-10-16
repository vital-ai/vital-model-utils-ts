import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction
 */
export class HaleyMappingFunction extends VITAL_Node {
  public readonly mappingFunctionArityType?: string;
  public readonly outputHaleyAnswerUnitType?: string;
  public readonly inputHaleyAnswerUnitType?: string;
  public readonly inputHaleyAnswerType?: string;
  public readonly outputHaleyAnswerType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMappingFunction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappingFunctionArityType',
        tsPropertyName: 'mappingFunctionArityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerUnitType',
        tsPropertyName: 'outputHaleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerUnitType',
        tsPropertyName: 'inputHaleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerType',
        tsPropertyName: 'inputHaleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerType',
        tsPropertyName: 'outputHaleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
