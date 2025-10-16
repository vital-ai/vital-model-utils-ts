import { KGQueryCriteriaGroup } from './kgqueryCriteriaGroup.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaORGroup
 */
export class KGQueryCriteriaORGroup extends KGQueryCriteriaGroup {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGQueryCriteriaORGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
