import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance
 */
export class HaleyValidationPathInstance extends VITAL_Node {
  public readonly pathInstanceTaxonomyValue?: string;
  public readonly validationPathType?: string;
  public readonly pathInstanceBooleanValue?: boolean;
  public readonly pathInstanceLongTextValue?: string;
  public readonly haleyAnswerType?: string;
  public readonly availablePathInstanceChoiceValues?: string;
  public readonly availablePathInstanceLowerDateTimeValue?: string | Date;
  public readonly validationPathInstanceMessage?: string;
  public readonly pathInstanceDateTimeValue?: string | Date;
  public readonly availablePathInstanceLowerDoubleValue?: number;
  public readonly availablePathInstanceUpperIntegerValue?: number;
  public readonly proofTreeMembershipURI?: string;
  public readonly availablePathInstanceTaxonomyURI?: string;
  public readonly validationPathConstraintType?: string;
  public readonly sourceProvenanceURI?: string;
  public readonly haleyRowTypeURI?: string;
  public readonly haleyRowRowInstanceCounter?: string;
  public readonly haleyAnswerInstance?: string;
  public readonly pathInstanceTextValue?: string;
  public readonly availablePathInstanceLowerIntegerValue?: number;
  public readonly validationPathScopeType?: string;
  public readonly pathInstanceUnknownValue?: string;
  public readonly haleyGroupInstance?: string;
  public readonly availablePathInstanceUpperDoubleValue?: number;
  public readonly availablePathInstanceMultiChoiceValues?: string;
  public readonly pathInstanceMultiChoiceValue?: string;
  public readonly pathInstanceChoiceValue?: string;
  public readonly haleyGroup?: string;
  public readonly haleyAnswerInstances?: string;
  public readonly availablePathInstanceUpperDateTimeValue?: string | Date;
  public readonly pathInstanceIntegerValue?: number;
  public readonly haleyRowRowTypeURI?: string;
  public readonly haleyRowInstanceCounter?: string;
  public readonly pathInstanceDoubleValue?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyValidationPathInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue',
        tsPropertyName: 'pathInstanceTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathType',
        tsPropertyName: 'validationPathType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceBooleanValue',
        tsPropertyName: 'pathInstanceBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue',
        tsPropertyName: 'pathInstanceLongTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType',
        tsPropertyName: 'haleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceChoiceValues',
        tsPropertyName: 'availablePathInstanceChoiceValues',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDateTimeValue',
        tsPropertyName: 'availablePathInstanceLowerDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathInstanceMessage',
        tsPropertyName: 'validationPathInstanceMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue',
        tsPropertyName: 'pathInstanceDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDoubleValue',
        tsPropertyName: 'availablePathInstanceLowerDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperIntegerValue',
        tsPropertyName: 'availablePathInstanceUpperIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI',
        tsPropertyName: 'proofTreeMembershipURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceTaxonomyURI',
        tsPropertyName: 'availablePathInstanceTaxonomyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathConstraintType',
        tsPropertyName: 'validationPathConstraintType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI',
        tsPropertyName: 'sourceProvenanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI',
        tsPropertyName: 'haleyRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter',
        tsPropertyName: 'haleyRowRowInstanceCounter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance',
        tsPropertyName: 'haleyAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue',
        tsPropertyName: 'pathInstanceTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerIntegerValue',
        tsPropertyName: 'availablePathInstanceLowerIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathScopeType',
        tsPropertyName: 'validationPathScopeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue',
        tsPropertyName: 'pathInstanceUnknownValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance',
        tsPropertyName: 'haleyGroupInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDoubleValue',
        tsPropertyName: 'availablePathInstanceUpperDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceMultiChoiceValues',
        tsPropertyName: 'availablePathInstanceMultiChoiceValues',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue',
        tsPropertyName: 'pathInstanceMultiChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue',
        tsPropertyName: 'pathInstanceChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroup',
        tsPropertyName: 'haleyGroup',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstances',
        tsPropertyName: 'haleyAnswerInstances',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDateTimeValue',
        tsPropertyName: 'availablePathInstanceUpperDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue',
        tsPropertyName: 'pathInstanceIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI',
        tsPropertyName: 'haleyRowRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter',
        tsPropertyName: 'haleyRowInstanceCounter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceDoubleValue',
        tsPropertyName: 'pathInstanceDoubleValue',
        type: 'number',
        required: false
      }
    ];
  }


}
