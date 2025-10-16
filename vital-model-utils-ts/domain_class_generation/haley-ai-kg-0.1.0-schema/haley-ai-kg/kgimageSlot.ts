import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGImageSlot
 */
export class KGImageSlot extends KGSlot {
  /** URI reference to one of: KGImage, FileNode */
  public readonly imageSlotValue?: http://vital.ai/ontology/haley-ai-kg#KGImage | http://vital.ai/ontology/vital#FileNode;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGImageSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasImageSlotValue',
        tsPropertyName: 'imageSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGImage | http://vital.ai/ontology/vital#FileNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
