import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasProofTreeNode
 */
export class Edge_hasProofTreeNode extends VITAL_PeerEdge {
  public readonly proofTreeNodeIndex?: number;
  public readonly proofTreeMembershipURI?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasProofTreeNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeNodeIndex',
        tsPropertyName: 'proofTreeNodeIndex',
        type: 'number',
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


  /**
   * Get the VitalSigns type URI for Edge_hasProofTreeNode
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasProofTreeNode';
  }
}
