import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping
 */
export class HaleyAnswerTypeMapping extends VITAL_Node {
  public readonly sourceConditionalUpperStringValue?: string;
  public readonly sourceConditionalUpperLongValue?: number;
  public readonly sourceConditionalDateValue?: string | Date;
  public readonly sourceConditionalBooleanValue?: boolean;
  public readonly sourceConditionalUpperDoubleValue?: number;
  public readonly destinationConditionalDoubleValue?: number;
  public readonly haleyMappingTypeURI?: string;
  public readonly destinationConditionalIntegerValue?: number;
  public readonly destinationConditionalLongValue?: number;
  public readonly sourceConditionalLongValue?: number;
  public readonly haleyMappingFunctionURI?: string;
  public readonly sourceConditionalDoubleValue?: number;
  public readonly destinationConditionalStringValue?: string;
  public readonly sourceConditionalStringValue?: string;
  public readonly sourceConditionalIntegerValue?: number;
  public readonly sourceConditionalUpperIntegerValue?: number;
  public readonly destinationMappedAnswerTypeURI?: string;
  public readonly mappingComparableType?: string;
  public readonly destinationConditionalBooleanValue?: boolean;
  public readonly sourceConditionalUpperDateValue?: string | Date;
  public readonly destinationConditionalDateValue?: string | Date;
  public readonly sourceMappedAnswerTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerTypeMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperStringValue',
        tsPropertyName: 'sourceConditionalUpperStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperLongValue',
        tsPropertyName: 'sourceConditionalUpperLongValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDateValue',
        tsPropertyName: 'sourceConditionalDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalBooleanValue',
        tsPropertyName: 'sourceConditionalBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDoubleValue',
        tsPropertyName: 'sourceConditionalUpperDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDoubleValue',
        tsPropertyName: 'destinationConditionalDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingTypeURI',
        tsPropertyName: 'haleyMappingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalIntegerValue',
        tsPropertyName: 'destinationConditionalIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalLongValue',
        tsPropertyName: 'destinationConditionalLongValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalLongValue',
        tsPropertyName: 'sourceConditionalLongValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI',
        tsPropertyName: 'haleyMappingFunctionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDoubleValue',
        tsPropertyName: 'sourceConditionalDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalStringValue',
        tsPropertyName: 'destinationConditionalStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalStringValue',
        tsPropertyName: 'sourceConditionalStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalIntegerValue',
        tsPropertyName: 'sourceConditionalIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperIntegerValue',
        tsPropertyName: 'sourceConditionalUpperIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI',
        tsPropertyName: 'destinationMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappingComparableType',
        tsPropertyName: 'mappingComparableType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalBooleanValue',
        tsPropertyName: 'destinationConditionalBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDateValue',
        tsPropertyName: 'sourceConditionalUpperDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDateValue',
        tsPropertyName: 'destinationConditionalDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI',
        tsPropertyName: 'sourceMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
