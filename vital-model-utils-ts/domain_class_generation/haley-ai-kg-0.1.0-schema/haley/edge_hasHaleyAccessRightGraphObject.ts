import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightGraphObject
 */
export class Edge_hasHaleyAccessRightGraphObject extends VITAL_PeerEdge {
  public readonly haleyAccessRightMessageDirectionURI?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasHaleyAccessRightGraphObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightMessageDirectionURI',
        tsPropertyName: 'haleyAccessRightMessageDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccessRightGraphObject
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightGraphObject';
  }
}
