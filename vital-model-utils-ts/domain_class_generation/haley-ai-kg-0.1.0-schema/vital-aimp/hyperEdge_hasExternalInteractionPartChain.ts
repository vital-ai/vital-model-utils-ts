import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasExternalInteractionPartChain
 */
export class HyperEdge_hasExternalInteractionPartChain extends VITAL_HyperEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, hyperEdgeSource, hyperEdgeDestination);

  }

  /**
   * Get property definitions for HyperEdge_hasExternalInteractionPartChain
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasExternalInteractionPartChain
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasExternalInteractionPartChain';
  }
}
