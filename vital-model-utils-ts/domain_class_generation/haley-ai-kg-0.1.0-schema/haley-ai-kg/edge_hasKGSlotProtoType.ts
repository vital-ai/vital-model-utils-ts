import { Edge_hasKGEdge } from './edge_hasKGEdge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlotProtoType
 */
export class Edge_hasKGSlotProtoType extends Edge_hasKGEdge {
  public readonly kGSlotRoleSequence?: number;
  public readonly kGSlotRoleType?: string;
  public readonly kGSlotTypeExternIdentifier?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasKGSlotProtoType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotRoleSequence',
        tsPropertyName: 'kGSlotRoleSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotRoleType',
        tsPropertyName: 'kGSlotRoleType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeExternIdentifier',
        tsPropertyName: 'kGSlotTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGSlotProtoType
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlotProtoType';
  }
}
