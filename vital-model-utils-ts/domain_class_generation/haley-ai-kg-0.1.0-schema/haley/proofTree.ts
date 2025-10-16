import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTree
 */
export class ProofTree extends VITAL_Node {
  public readonly proofConclusionExplanation?: string;
  public readonly proofTreeMembershipURI?: string;
  public readonly proofAnswerTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProofTree
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofConclusionExplanation',
        tsPropertyName: 'proofConclusionExplanation',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/haley#hasProofAnswerTypeURI',
        tsPropertyName: 'proofAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
