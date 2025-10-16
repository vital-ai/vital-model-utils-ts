import { HyperEdge_hasHyperAnnotation } from './hyperEdge_hasHyperAnnotation.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#HyperEdge_hasReason
 */
export class HyperEdge_hasReason extends HyperEdge_hasHyperAnnotation {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, hyperEdgeSource, hyperEdgeDestination);

  }

  /**
   * Get property definitions for HyperEdge_hasReason
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasReason
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#HyperEdge_hasReason';
  }
}
