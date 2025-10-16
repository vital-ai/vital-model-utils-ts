import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChoiceOptionSlot
 */
export class KGChoiceOptionSlot extends KGSlot {
  public readonly choiceSlotOptionValues?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGChoiceOptionSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotOptionValues',
        tsPropertyName: 'choiceSlotOptionValues',
        type: 'string',
        required: false
      }
    ];
  }


}
