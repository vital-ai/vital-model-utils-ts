import { Edge_hasKGEdge } from './edge_hasKGEdge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGChatInteractionEventSuccessor
 */
export class Edge_hasKGChatInteractionEventSuccessor extends Edge_hasKGEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasKGChatInteractionEventSuccessor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGChatInteractionEventSuccessor
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGChatInteractionEventSuccessor';
  }
}
