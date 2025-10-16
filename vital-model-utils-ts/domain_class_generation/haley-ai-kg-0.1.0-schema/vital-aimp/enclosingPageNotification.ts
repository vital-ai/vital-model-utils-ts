import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EnclosingPageNotification
 */
export class EnclosingPageNotification extends Card {
  public readonly notificationJsonBody?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for EnclosingPageNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNotificationJsonBody',
        tsPropertyName: 'notificationJsonBody',
        type: 'string',
        required: false
      }
    ];
  }


}
