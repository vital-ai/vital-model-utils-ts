import { ProofTreeNode } from './proofTreeNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeDependencyNode
 */
export class ProofTreeDependencyNode extends ProofTreeNode {
  public readonly proofJustificationIteration?: number;
  public readonly proofTreeDependencyNodeOriginURIs?: string;
  public readonly proofJustificationGoal?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProofTreeDependencyNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationIteration',
        tsPropertyName: 'proofJustificationIteration',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeDependencyNodeOriginURIs',
        tsPropertyName: 'proofTreeDependencyNodeOriginURIs',
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
