import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#HyperEdge_hasFact
 */
export class HyperEdge_hasFact extends VITAL_HyperEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, hyperEdgeSource, hyperEdgeDestination);

  }

  /**
   * Get property definitions for HyperEdge_hasFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasFact
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#HyperEdge_hasFact';
  }
}
