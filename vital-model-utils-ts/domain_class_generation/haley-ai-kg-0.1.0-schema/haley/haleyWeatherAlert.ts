import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherAlert
 */
export class HaleyWeatherAlert extends VITAL_Node {
  public readonly weatherAlertDescription?: string;
  public readonly haleyWeatherAlertCertaintyURI?: string;
  public readonly weatherAlertSender?: string;
  public readonly haleyWeatherAlertSeverityURI?: string;
  public readonly weatherAlertHeadline?: string;
  public readonly weatherAlertEvent?: string;
  public readonly weatherAlertExpiration?: string | Date;
  public readonly weatherAlertOnset?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyWeatherAlert
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertDescription',
        tsPropertyName: 'weatherAlertDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherAlertCertaintyURI',
        tsPropertyName: 'haleyWeatherAlertCertaintyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertSender',
        tsPropertyName: 'weatherAlertSender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherAlertSeverityURI',
        tsPropertyName: 'haleyWeatherAlertSeverityURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertHeadline',
        tsPropertyName: 'weatherAlertHeadline',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertEvent',
        tsPropertyName: 'weatherAlertEvent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertExpiration',
        tsPropertyName: 'weatherAlertExpiration',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAlertOnset',
        tsPropertyName: 'weatherAlertOnset',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
