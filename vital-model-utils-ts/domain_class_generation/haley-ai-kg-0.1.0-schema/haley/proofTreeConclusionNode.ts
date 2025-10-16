import { ProofTreeNode } from './proofTreeNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeConclusionNode
 */
export class ProofTreeConclusionNode extends ProofTreeNode {
  public readonly proofDecisionURI?: string;
  public readonly proofConclusionExplanation?: string;
  public readonly proofPrimaryGoalURI?: string;
  public readonly proofAnswerTypeURI?: string;
  public readonly proofTertiaryGoalURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProofTreeConclusionNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofDecisionURI',
        tsPropertyName: 'proofDecisionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofConclusionExplanation',
        tsPropertyName: 'proofConclusionExplanation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofPrimaryGoalURI',
        tsPropertyName: 'proofPrimaryGoalURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofAnswerTypeURI',
        tsPropertyName: 'proofAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTertiaryGoalURI',
        tsPropertyName: 'proofTertiaryGoalURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
