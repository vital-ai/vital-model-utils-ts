import { Edge_hasKGEdge } from './edge_hasKGEdge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasSubKGFrameType
 */
export class Edge_hasSubKGFrameType extends Edge_hasKGEdge {
  public readonly kGFrameTypeExternIdentifier?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasSubKGFrameType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameTypeExternIdentifier',
        tsPropertyName: 'kGFrameTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSubKGFrameType
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasSubKGFrameType';
  }
}
