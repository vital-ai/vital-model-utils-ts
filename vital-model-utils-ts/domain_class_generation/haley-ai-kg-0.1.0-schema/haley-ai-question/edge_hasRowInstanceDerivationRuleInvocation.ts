import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivationRuleInvocation
 */
export class Edge_hasRowInstanceDerivationRuleInvocation extends VITAL_PeerEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasRowInstanceDerivationRuleInvocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasRowInstanceDerivationRuleInvocation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivationRuleInvocation';
  }
}
