import { HaleyResponseMessage } from './haleyResponseMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyPermitStreamingResponseMessage
 */
export class HaleyPermitStreamingResponseMessage extends HaleyResponseMessage {
  public readonly permitStreamingTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyPermitStreamingResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPermitStreamingTypeURI',
        tsPropertyName: 'permitStreamingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
