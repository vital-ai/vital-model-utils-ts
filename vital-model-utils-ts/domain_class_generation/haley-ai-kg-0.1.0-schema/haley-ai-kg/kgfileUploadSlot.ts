import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot
 */
export class KGFileUploadSlot extends KGSlot {
  /** URI reference to one of: KGDocument, KGMedia, FileNode */
  public readonly fileUploadSlotValue?: http://vital.ai/ontology/haley-ai-kg#KGDocument | http://vital.ai/ontology/haley-ai-kg#KGMedia | http://vital.ai/ontology/vital#FileNode;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGFileUploadSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFileUploadSlotValue',
        tsPropertyName: 'fileUploadSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGDocument | http://vital.ai/ontology/haley-ai-kg#KGMedia | http://vital.ai/ontology/vital#FileNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
