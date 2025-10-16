import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceSlot
 */
export class KGMultiChoiceSlot extends KGSlot {
  public readonly multiChoiceSlotValues?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGMultiChoiceSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues',
        tsPropertyName: 'multiChoiceSlotValues',
        type: 'string',
        required: false
      }
    ];
  }


}
