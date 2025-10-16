import { HaleyAppEvent } from './haleyAppEvent.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUserEvent
 */
export class HaleyUserEvent extends HaleyAppEvent {
  public readonly loginURI?: string;
  public readonly loginUsername?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyUserEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasLoginUsername',
        tsPropertyName: 'loginUsername',
        type: 'string',
        required: false
      }
    ];
  }


}
