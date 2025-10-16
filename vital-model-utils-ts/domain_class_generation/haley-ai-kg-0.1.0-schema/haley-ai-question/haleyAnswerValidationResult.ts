import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerValidationResult
 */
export class HaleyAnswerValidationResult extends VITAL_Node {
  public readonly haleyAnswerValidationMessage?: string;
  public readonly haleyAnswerValidationStatus?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerValidationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationMessage',
        tsPropertyName: 'haleyAnswerValidationMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationStatus',
        tsPropertyName: 'haleyAnswerValidationStatus',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
