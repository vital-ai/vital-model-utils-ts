import { ProofTreeNode } from './proofTreeNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeJustificationNode
 */
export class ProofTreeJustificationNode extends ProofTreeNode {
  public readonly proofJustificationAnswerTypeURI?: string;
  public readonly proofJustificationResult?: boolean;
  public readonly proofJustificationRuleMessage?: string;
  public readonly proofJustificationIteration?: number;
  public readonly proofJustificationRuleIdentifier?: string;
  public readonly finalJustification?: boolean;
  public readonly proofJustificationTypeURI?: string;
  public readonly proofJustificationGoal?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProofTreeJustificationNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationAnswerTypeURI',
        tsPropertyName: 'proofJustificationAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationResult',
        tsPropertyName: 'proofJustificationResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationRuleMessage',
        tsPropertyName: 'proofJustificationRuleMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationIteration',
        tsPropertyName: 'proofJustificationIteration',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationRuleIdentifier',
        tsPropertyName: 'proofJustificationRuleIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isFinalJustification',
        tsPropertyName: 'finalJustification',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationTypeURI',
        tsPropertyName: 'proofJustificationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationGoal',
        tsPropertyName: 'proofJustificationGoal',
        type: 'string',
        required: false
      }
    ];
  }


}
