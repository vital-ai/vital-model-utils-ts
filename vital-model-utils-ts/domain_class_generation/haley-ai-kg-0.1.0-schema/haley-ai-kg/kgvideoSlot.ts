import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGVideoSlot
 */
export class KGVideoSlot extends KGSlot {
  /** URI reference to one of: FileNode, KGVideo */
  public readonly videoSlotValue?: http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGVideo;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGVideoSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasVideoSlotValue',
        tsPropertyName: 'videoSlotValue',
        type: 'http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGVideo',
        required: false,
        format: 'uri'
      }
    ];
  }


}
