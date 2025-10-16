import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGGeoLocationSlot
 */
export class KGGeoLocationSlot extends KGSlot {
  public readonly geoLocationSlotValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGGeoLocationSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasGeoLocationSlotValue',
        tsPropertyName: 'geoLocationSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
