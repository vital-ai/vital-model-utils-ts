import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherDailyReport
 */
export class HaleyWeatherDailyReport extends VITAL_Node {
  public readonly haleyWeatherWindCompassDirectionURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyWeatherDailyReport
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherWindCompassDirectionURI',
        tsPropertyName: 'haleyWeatherWindCompassDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
