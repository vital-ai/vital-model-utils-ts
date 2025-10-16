import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeNode
 */
export class ProofTreeNode extends VITAL_Node {
  /** URI reference to one of: ProofTreeDeriveNode, ProofTreeJustificationNode, ProofTreeAncestorNode, ProofTreeDependencyNode */
  public readonly proofTreeAskNodeOriginURIs?: http://vital.ai/ontology/haley#ProofTreeDeriveNode | http://vital.ai/ontology/haley#ProofTreeJustificationNode | http://vital.ai/ontology/haley#ProofTreeAncestorNode | http://vital.ai/ontology/haley#ProofTreeDependencyNode;
  public readonly proofTreeRuleName?: string;
  public readonly proofTreeMembershipURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProofTreeNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeAskNodeOriginURIs',
        tsPropertyName: 'proofTreeAskNodeOriginURIs',
        type: 'http://vital.ai/ontology/haley#ProofTreeDeriveNode | http://vital.ai/ontology/haley#ProofTreeJustificationNode | http://vital.ai/ontology/haley#ProofTreeAncestorNode | http://vital.ai/ontology/haley#ProofTreeDependencyNode',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeRuleName',
        tsPropertyName: 'proofTreeRuleName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI',
        tsPropertyName: 'proofTreeMembershipURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
