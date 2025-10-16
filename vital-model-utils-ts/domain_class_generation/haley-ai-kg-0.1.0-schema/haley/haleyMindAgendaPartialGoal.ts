import { HaleyMindAgendaGoal } from './haleyMindAgendaGoal.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindAgendaPartialGoal
 */
export class HaleyMindAgendaPartialGoal extends HaleyMindAgendaGoal {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindAgendaPartialGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
