import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGPropertySlot
 */
export class KGPropertySlot extends KGSlot {
  public readonly kGPropertyGroupNameSlotValue?: string;
  public readonly propertyFrameTypeSlotValue?: string;
  public readonly kGPropertyNameSlotValue?: string;
  public readonly propertySlotTypeSlotValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGPropertySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPropertyGroupNameSlotValue',
        tsPropertyName: 'kGPropertyGroupNameSlotValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPropertyFrameTypeSlotValue',
        tsPropertyName: 'propertyFrameTypeSlotValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPropertyNameSlotValue',
        tsPropertyName: 'kGPropertyNameSlotValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPropertySlotTypeSlotValue',
        tsPropertyName: 'propertySlotTypeSlotValue',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
