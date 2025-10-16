import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindQueryAnswer
 */
export class HaleyMindQueryAnswer extends VITAL_Node {
  public readonly haleyMindAnswerDerivationTree?: string;
  public readonly haleyMindQueryAnswerResult?: boolean;
  public readonly haleyMindAnswerExplanation?: string;
  public readonly answerToRuleURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindQueryAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAnswerDerivationTree',
        tsPropertyName: 'haleyMindAnswerDerivationTree',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryAnswerResult',
        tsPropertyName: 'haleyMindQueryAnswerResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAnswerExplanation',
        tsPropertyName: 'haleyMindAnswerExplanation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnswerToRuleURI',
        tsPropertyName: 'answerToRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
