import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage
 */
export class HaleyRealtimeMessage extends AIMPMessage {
  public readonly serverSentEventJSON?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyRealtimeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasServerSentEventJSON',
        tsPropertyName: 'serverSentEventJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
