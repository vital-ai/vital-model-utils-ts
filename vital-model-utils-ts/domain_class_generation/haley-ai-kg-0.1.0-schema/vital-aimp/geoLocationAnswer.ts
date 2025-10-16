import { Answer } from './answer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GeoLocationAnswer
 */
export class GeoLocationAnswer extends Answer {
  public readonly geolocation?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for GeoLocationAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeolocation',
        tsPropertyName: 'geolocation',
        type: 'string',
        required: false
      }
    ];
  }


}
