import { HaleyMessage } from './haleyMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyFacebookStatusPanelMessage
 */
export class HaleyFacebookStatusPanelMessage extends HaleyMessage {
  public readonly newStatus?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyFacebookStatusPanelMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNewStatus',
        tsPropertyName: 'newStatus',
        type: 'string',
        required: false
      }
    ];
  }


}
