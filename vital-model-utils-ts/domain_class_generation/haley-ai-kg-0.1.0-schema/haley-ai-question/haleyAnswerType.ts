import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerType
 */
export class HaleyAnswerType extends VITAL_Node {
  public readonly answerTypeExternalName?: string;
  public readonly answerTypeExernalVersion?: string;
  public readonly description?: string;
  public readonly activeAnswerType?: boolean;
  public readonly haleyAnswerTypeCategory?: string;
  public readonly answerTypeUseStartDate?: string | Date;
  public readonly rootAnswerType?: boolean;
  public readonly answerTypeExternalIdentifier?: string;
  public readonly haleyAnswerUnitType?: string;
  public readonly haleyCurrencyType?: string;
  public readonly haleyAnswerDataType?: string;
  public readonly answerTypeUseEndDate?: string | Date;
  public readonly answerTypeVersion?: string;
  public readonly answerTypeIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalName',
        tsPropertyName: 'answerTypeExternalName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExernalVersion',
        tsPropertyName: 'answerTypeExernalVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveAnswerType',
        tsPropertyName: 'activeAnswerType',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeCategory',
        tsPropertyName: 'haleyAnswerTypeCategory',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseStartDate',
        tsPropertyName: 'answerTypeUseStartDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRootAnswerType',
        tsPropertyName: 'rootAnswerType',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalIdentifier',
        tsPropertyName: 'answerTypeExternalIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType',
        tsPropertyName: 'haleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType',
        tsPropertyName: 'haleyCurrencyType',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseEndDate',
        tsPropertyName: 'answerTypeUseEndDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeVersion',
        tsPropertyName: 'answerTypeVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeIdentifier',
        tsPropertyName: 'answerTypeIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
