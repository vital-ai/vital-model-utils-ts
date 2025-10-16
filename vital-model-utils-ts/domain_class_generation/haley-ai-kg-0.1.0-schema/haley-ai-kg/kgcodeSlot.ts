import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCodeSlot
 */
export class KGCodeSlot extends KGSlot {
  /** URI reference to one of: FileNode, KGCodeDocument */
  public readonly codeSlotValue?: http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGCodeDocument;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGCodeSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasCodeSlotValue',
        tsPropertyName: 'codeSlotValue',
        type: 'http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGCodeDocument',
        required: false,
        format: 'uri'
      }
    ];
  }


}
