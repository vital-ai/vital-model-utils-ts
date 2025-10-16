import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Edge_hasVitalOntNode
 */
export class Edge_hasVitalOntNode extends VITAL_PeerEdge {
  public readonly vitalOntEdgeType?: string;
  public readonly vitalOntEdgeURI?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasVitalOntNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntEdgeType',
        tsPropertyName: 'vitalOntEdgeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntEdgeURI',
        tsPropertyName: 'vitalOntEdgeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasVitalOntNode
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#Edge_hasVitalOntNode';
  }
}
