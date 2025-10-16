import { AIMPEvent } from '../vital-aimp/aimpevent.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAppEvent
 */
export class HaleyAppEvent extends AIMPEvent {
  public readonly eventDetails?: string;
  public readonly eventType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAppEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEventDetails',
        tsPropertyName: 'eventDetails',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEventType',
        tsPropertyName: 'eventType',
        type: 'string',
        required: false
      }
    ];
  }


}
