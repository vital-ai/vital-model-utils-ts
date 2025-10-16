import { HaleyGroupMappingAction } from './haleyGroupMappingAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupGenerativeMappingAction
 */
export class HaleyGroupGenerativeMappingAction extends HaleyGroupMappingAction {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGroupGenerativeMappingAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
