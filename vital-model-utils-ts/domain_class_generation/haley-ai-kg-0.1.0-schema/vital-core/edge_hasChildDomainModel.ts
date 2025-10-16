import { VITAL_PeerEdge } from './vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel
 */
export class Edge_hasChildDomainModel extends VITAL_PeerEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasChildDomainModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChildDomainModel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel';
  }
}
