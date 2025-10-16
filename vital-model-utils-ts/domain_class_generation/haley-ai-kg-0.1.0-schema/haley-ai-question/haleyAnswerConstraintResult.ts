import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerConstraintResult
 */
export class HaleyAnswerConstraintResult extends VITAL_Node {
  public readonly answerConstraintResultMessage?: string;
  public readonly haleyAnswerConstraintStatus?: string;
  public readonly haleyAnswerInstance?: string;
  public readonly suggestedHaleyAnswerInstance?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerConstraintResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerConstraintResultMessage',
        tsPropertyName: 'answerConstraintResultMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintStatus',
        tsPropertyName: 'haleyAnswerConstraintStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance',
        tsPropertyName: 'haleyAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSuggestedHaleyAnswerInstance',
        tsPropertyName: 'suggestedHaleyAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
