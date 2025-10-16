import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntitySlot
 */
export class KGEntitySlot extends KGSlot {
  /** URI reference to one of: KGEntityMention, KGEntity */
  public readonly entitySlotValue?: http://vital.ai/ontology/haley-ai-kg#KGEntityMention | http://vital.ai/ontology/haley-ai-kg#KGEntity;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGEntitySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasEntitySlotValue',
        tsPropertyName: 'entitySlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGEntityMention | http://vital.ai/ontology/haley-ai-kg#KGEntity',
        required: false,
        format: 'uri'
      }
    ];
  }


}
