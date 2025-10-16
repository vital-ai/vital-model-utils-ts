import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaGoalCondition
 */
export class Edge_hasHaleyMindAgendaGoalCondition extends VITAL_PeerEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasHaleyMindAgendaGoalCondition
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyMindAgendaGoalCondition
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyMindAgendaGoalCondition';
  }
}
