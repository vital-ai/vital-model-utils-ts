import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswer
 */
export class HaleyAnswer extends VITAL_Node {
  public readonly calculatedAnswerValue?: boolean;
  public readonly aggregationAnswer?: boolean;
  public readonly aggregrationQuestionURI?: string;
  public readonly haleyAnswerType?: string;
  public readonly preferredSelectorType?: string;
  public readonly dynamicRequiredAnswer?: boolean;
  public readonly subjectToConstraints?: boolean;
  public readonly aggregationType?: string;
  public readonly haleyAnswerUnitType?: string;
  public readonly subjectToValidation?: boolean;
  public readonly readOnlyAnswerValue?: boolean;
  public readonly aggregationRowURI?: string;
  public readonly haleyAnswerDataType?: string;
  public readonly haleyMappedAnswerType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isCalculatedAnswerValue',
        tsPropertyName: 'calculatedAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAggregationAnswer',
        tsPropertyName: 'aggregationAnswer',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregrationQuestionURI',
        tsPropertyName: 'aggregrationQuestionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType',
        tsPropertyName: 'haleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPreferredSelectorType',
        tsPropertyName: 'preferredSelectorType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDynamicRequiredAnswer',
        tsPropertyName: 'dynamicRequiredAnswer',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSubjectToConstraints',
        tsPropertyName: 'subjectToConstraints',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationType',
        tsPropertyName: 'aggregationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType',
        tsPropertyName: 'haleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSubjectToValidation',
        tsPropertyName: 'subjectToValidation',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue',
        tsPropertyName: 'readOnlyAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationRowURI',
        tsPropertyName: 'aggregationRowURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType',
        tsPropertyName: 'haleyAnswerDataType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerType',
        tsPropertyName: 'haleyMappedAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
