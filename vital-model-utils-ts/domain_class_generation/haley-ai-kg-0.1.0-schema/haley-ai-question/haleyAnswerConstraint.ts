import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraint
 */
export class HaleyAnswerConstraint extends VITAL_Node {
  public readonly integerRangeDecrease?: number;
  public readonly haleyAnswerComparison?: string;
  public readonly upperBoundDateValue?: string | Date;
  public readonly lowerBoundDoubleValue?: number;
  public readonly upperBoundCurrencyValue?: number;
  public readonly lowerBoundIntegerValue?: number;
  public readonly doubleRangeIncrease?: number;
  public readonly multiChoiceAnswerValue?: string;
  public readonly haleyAnswerTypeComparison?: string;
  public readonly integerRangeIncrease?: number;
  public readonly longTextAnswerValue?: string;
  public readonly upperBoundIntegerValue?: number;
  public readonly haleyAnswerConstantURI?: string;
  public readonly haleyAnswerConstraintType?: string;
  public readonly upperBoundDoubleValue?: number;
  public readonly haleyCurrencyType?: string;
  public readonly doubleAnswerValue?: number;
  public readonly multiTaxonomyAnswerValue?: string;
  public readonly booleanAnswerValue?: boolean;
  public readonly haleyAnswerUnitType?: string;
  public readonly integerAnswerValue?: number;
  public readonly haleyAnswerConstraintRelationshipURI?: string;
  public readonly haleyAnswerDataType?: string;
  public readonly dateRangeDecrease?: number;
  public readonly dateTimeAnswerValue?: string | Date;
  public readonly choiceAnswerValue?: string;
  public readonly lowerBoundDateValue?: string | Date;
  public readonly fileAnswerValueURI?: string;
  public readonly doubleRangeDecrease?: number;
  public readonly taxonomyAnswerValue?: string;
  public readonly haleyAnswerConstraintComparatorURI?: string;
  public readonly signatureAnswerValue?: string;
  public readonly dateRangeIncrease?: number;
  public readonly lowerBoundCurrencyValue?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerConstraint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerRangeDecrease',
        tsPropertyName: 'integerRangeDecrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerComparison',
        tsPropertyName: 'haleyAnswerComparison',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundDateValue',
        tsPropertyName: 'upperBoundDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundDoubleValue',
        tsPropertyName: 'lowerBoundDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundCurrencyValue',
        tsPropertyName: 'upperBoundCurrencyValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundIntegerValue',
        tsPropertyName: 'lowerBoundIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleRangeIncrease',
        tsPropertyName: 'doubleRangeIncrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue',
        tsPropertyName: 'multiChoiceAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeComparison',
        tsPropertyName: 'haleyAnswerTypeComparison',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerRangeIncrease',
        tsPropertyName: 'integerRangeIncrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue',
        tsPropertyName: 'longTextAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundIntegerValue',
        tsPropertyName: 'upperBoundIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI',
        tsPropertyName: 'haleyAnswerConstantURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintType',
        tsPropertyName: 'haleyAnswerConstraintType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpperBoundDoubleValue',
        tsPropertyName: 'upperBoundDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType',
        tsPropertyName: 'haleyCurrencyType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue',
        tsPropertyName: 'doubleAnswerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue',
        tsPropertyName: 'multiTaxonomyAnswerValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue',
        tsPropertyName: 'booleanAnswerValue',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue',
        tsPropertyName: 'integerAnswerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintRelationshipURI',
        tsPropertyName: 'haleyAnswerConstraintRelationshipURI',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateRangeDecrease',
        tsPropertyName: 'dateRangeDecrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue',
        tsPropertyName: 'dateTimeAnswerValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue',
        tsPropertyName: 'choiceAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundDateValue',
        tsPropertyName: 'lowerBoundDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI',
        tsPropertyName: 'fileAnswerValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleRangeDecrease',
        tsPropertyName: 'doubleRangeDecrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue',
        tsPropertyName: 'taxonomyAnswerValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI',
        tsPropertyName: 'haleyAnswerConstraintComparatorURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue',
        tsPropertyName: 'signatureAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateRangeIncrease',
        tsPropertyName: 'dateRangeIncrease',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLowerBoundCurrencyValue',
        tsPropertyName: 'lowerBoundCurrencyValue',
        type: 'number',
        required: false
      }
    ];
  }


}
