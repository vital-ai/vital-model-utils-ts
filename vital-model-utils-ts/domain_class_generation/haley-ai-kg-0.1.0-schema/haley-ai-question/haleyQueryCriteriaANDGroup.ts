import { HaleyQueryCriteriaGroup } from './haleyQueryCriteriaGroup.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaANDGroup
 */
export class HaleyQueryCriteriaANDGroup extends HaleyQueryCriteriaGroup {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQueryCriteriaANDGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
