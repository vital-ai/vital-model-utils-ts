import { VITAL_PeerEdge } from './vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasIndexConfig
 */
export class Edge_hasIndexConfig extends VITAL_PeerEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasIndexConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasIndexConfig
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasIndexConfig';
  }
}
