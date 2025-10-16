import { HaleyLinkedInMessage } from './haleyLinkedInMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyLinkedInSearchMessage
 */
export class HaleyLinkedInSearchMessage extends HaleyLinkedInMessage {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyLinkedInSearchMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
