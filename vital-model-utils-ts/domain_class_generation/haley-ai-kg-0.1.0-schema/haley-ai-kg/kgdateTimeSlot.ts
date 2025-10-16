import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot
 */
export class KGDateTimeSlot extends KGSlot {
  public readonly dateTimeSlotValue?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGDateTimeSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDateTimeSlotValue',
        tsPropertyName: 'dateTimeSlotValue',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
