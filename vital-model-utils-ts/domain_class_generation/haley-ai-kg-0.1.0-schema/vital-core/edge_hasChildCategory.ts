import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasChildCategory
 */
export class Edge_hasChildCategory extends VITAL_TaxonomyEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasChildCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChildCategory
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasChildCategory';
  }
}
