import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot
 */
export class KGBooleanSlot extends KGSlot {
  public readonly booleanSlotValue?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGBooleanSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasBooleanSlotValue',
        tsPropertyName: 'booleanSlotValue',
        type: 'boolean',
        required: false
      }
    ];
  }


}
