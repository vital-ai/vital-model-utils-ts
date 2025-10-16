import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRunSlot
 */
export class KGRunSlot extends KGSlot {
  /** URI reference to one of: KGRunDocument, FileNode */
  public readonly runSlotValue?: http://vital.ai/ontology/haley-ai-kg#KGRunDocument | http://vital.ai/ontology/vital#FileNode;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRunSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasRunSlotValue',
        tsPropertyName: 'runSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGRunDocument | http://vital.ai/ontology/vital#FileNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
