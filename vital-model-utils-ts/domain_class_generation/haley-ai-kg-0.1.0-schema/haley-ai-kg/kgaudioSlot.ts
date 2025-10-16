import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAudioSlot
 */
export class KGAudioSlot extends KGSlot {
  /** URI reference to one of: KGAudio, FileNode */
  public readonly audioSlotValue?: http://vital.ai/ontology/haley-ai-kg#KGAudio | http://vital.ai/ontology/vital#FileNode;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAudioSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasAudioSlotValue',
        tsPropertyName: 'audioSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGAudio | http://vital.ai/ontology/vital#FileNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
