import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance
 */
export class HaleyAnswerPathInstance extends VITAL_Node {
  public readonly pathInstanceUnknownValue?: string;
  public readonly pathInstanceTaxonomyValue?: string;
  public readonly haleyGroupInstance?: string;
  public readonly pathInstanceBooleanValue?: boolean;
  public readonly pathInstanceLongTextValue?: string;
  public readonly pathInstanceNewEnabled?: boolean;
  public readonly pathInstanceMultiTaxonomyValue?: string;
  public readonly haleyAnswerType?: string;
  public readonly pathInstanceMultiChoiceValue?: string;
  public readonly answerPathKeyName?: string;
  public readonly pathInstanceEphemeralValue?: boolean;
  public readonly pathInstanceChoiceValue?: string;
  public readonly answerPathProofIteration?: number;
  public readonly answerPathInstanceModifiedTimestamp?: string | Date;
  public readonly pathInstanceEnabled?: boolean;
  public readonly pathInstanceDateTimeValue?: string | Date;
  public readonly haleyGroup?: string;
  public readonly haleyRowInstanceCounter?: string;
  public readonly answerPathInstanceModified?: boolean;
  public readonly proofTreeMembershipURI?: string;
  public readonly pathInstanceIntegerValue?: number;
  public readonly sourceProvenanceURI?: string;
  public readonly haleyRowTypeURI?: string;
  public readonly haleyRowRowTypeURI?: string;
  public readonly haleyRowRowInstanceCounter?: string;
  public readonly pathInstanceTextValue?: string;
  public readonly pathInstanceDoubleValue?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerPathInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue',
        tsPropertyName: 'pathInstanceUnknownValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue',
        tsPropertyName: 'pathInstanceTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance',
        tsPropertyName: 'haleyGroupInstance',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isPathInstanceNewEnabled',
        tsPropertyName: 'pathInstanceNewEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiTaxonomyValue',
        tsPropertyName: 'pathInstanceMultiTaxonomyValue',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue',
        tsPropertyName: 'pathInstanceMultiChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerPathKeyName',
        tsPropertyName: 'answerPathKeyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isPathInstanceEphemeralValue',
        tsPropertyName: 'pathInstanceEphemeralValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue',
        tsPropertyName: 'pathInstanceChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerPathProofIteration',
        tsPropertyName: 'answerPathProofIteration',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerPathInstanceModifiedTimestamp',
        tsPropertyName: 'answerPathInstanceModifiedTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isPathInstanceEnabled',
        tsPropertyName: 'pathInstanceEnabled',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroup',
        tsPropertyName: 'haleyGroup',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnswerPathInstanceModified',
        tsPropertyName: 'answerPathInstanceModified',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue',
        tsPropertyName: 'pathInstanceIntegerValue',
        type: 'number',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI',
        tsPropertyName: 'haleyRowRowTypeURI',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue',
        tsPropertyName: 'pathInstanceTextValue',
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
