import { VITAL_Edge } from './vitalEdge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge
 */
export class VITAL_TaxonomyEdge extends VITAL_Edge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for VITAL_TaxonomyEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for VITAL_TaxonomyEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge';
  }
}
