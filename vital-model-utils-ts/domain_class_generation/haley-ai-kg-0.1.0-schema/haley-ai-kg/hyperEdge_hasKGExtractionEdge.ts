import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#HyperEdge_hasKGExtractionEdge
 */
export class HyperEdge_hasKGExtractionEdge extends VITAL_HyperEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, hyperEdgeSource, hyperEdgeDestination);

  }

  /**
   * Get property definitions for HyperEdge_hasKGExtractionEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasKGExtractionEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#HyperEdge_hasKGExtractionEdge';
  }
}
