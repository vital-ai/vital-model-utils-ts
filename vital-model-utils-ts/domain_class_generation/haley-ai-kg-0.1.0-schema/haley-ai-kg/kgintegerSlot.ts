import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot
 */
export class KGIntegerSlot extends KGSlot {
  public readonly integerSlotValue?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGIntegerSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasIntegerSlotValue',
        tsPropertyName: 'integerSlotValue',
        type: 'number',
        required: false
      }
    ];
  }


}
