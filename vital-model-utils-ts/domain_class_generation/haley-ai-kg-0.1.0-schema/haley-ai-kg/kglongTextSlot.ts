import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot
 */
export class KGLongTextSlot extends KGSlot {
  public readonly longTextSlotValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGLongTextSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasLongTextSlotValue',
        tsPropertyName: 'longTextSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
