import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherReport
 */
export class HaleyWeatherReport extends VITAL_Node {
  public readonly weatherMoonSet?: string | Date;
  public readonly weatherSunset?: string | Date;
  public readonly weatherDewPoint?: number;
  public readonly weatherSunrise?: string | Date;
  public readonly airQualityOzone?: number;
  public readonly airQualityUltraVioletIndex?: number;
  public readonly windDirection?: string;
  public readonly weatherMoonRise?: string | Date;
  public readonly weatherCloudCover?: number;
  public readonly windAngle?: number;
  public readonly weatherReportUnits?: string;
  public readonly weatherReportHistorical?: boolean;
  public readonly weatherFeelsLikeTemperature?: number;
  public readonly haleyWeatherMoonPhaseURI?: string;
  public readonly weatherHumidity?: number;
  public readonly weatherReportIcon?: string;
  public readonly haleyWeatherWindCompassDirectionURI?: string;
  public readonly weatherElevation?: number;
  public readonly weatherReportLatitude?: number;
  public readonly weatherWindChill?: number;
  public readonly weatherTemperature?: number;
  public readonly weatherReportJSON?: string;
  public readonly weatherReportLongitude?: number;
  public readonly weatherPrecipitationType?: string;
  public readonly airQualityIrradiance?: number;
  public readonly weatherPrecipitationTotal?: number;
  public readonly weatherReportTimeZoneIdentifier?: string;
  public readonly weatherVisibility?: number;
  public readonly weatherAirPressure?: number;
  public readonly windSpeed?: number;
  public readonly weatherReportSummary?: string;
  public readonly weatherReportDateTime?: string | Date;
  public readonly weatherReportIconInteger?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyWeatherReport
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherMoonSet',
        tsPropertyName: 'weatherMoonSet',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherSunset',
        tsPropertyName: 'weatherSunset',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherDewPoint',
        tsPropertyName: 'weatherDewPoint',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherSunrise',
        tsPropertyName: 'weatherSunrise',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAirQualityOzone',
        tsPropertyName: 'airQualityOzone',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAirQualityUltraVioletIndex',
        tsPropertyName: 'airQualityUltraVioletIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWindDirection',
        tsPropertyName: 'windDirection',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherMoonRise',
        tsPropertyName: 'weatherMoonRise',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherCloudCover',
        tsPropertyName: 'weatherCloudCover',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWindAngle',
        tsPropertyName: 'windAngle',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportUnits',
        tsPropertyName: 'weatherReportUnits',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isWeatherReportHistorical',
        tsPropertyName: 'weatherReportHistorical',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherFeelsLikeTemperature',
        tsPropertyName: 'weatherFeelsLikeTemperature',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherMoonPhaseURI',
        tsPropertyName: 'haleyWeatherMoonPhaseURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherHumidity',
        tsPropertyName: 'weatherHumidity',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportIcon',
        tsPropertyName: 'weatherReportIcon',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherWindCompassDirectionURI',
        tsPropertyName: 'haleyWeatherWindCompassDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherElevation',
        tsPropertyName: 'weatherElevation',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportLatitude',
        tsPropertyName: 'weatherReportLatitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherWindChill',
        tsPropertyName: 'weatherWindChill',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTemperature',
        tsPropertyName: 'weatherTemperature',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportJSON',
        tsPropertyName: 'weatherReportJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportLongitude',
        tsPropertyName: 'weatherReportLongitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherPrecipitationType',
        tsPropertyName: 'weatherPrecipitationType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAirQualityIrradiance',
        tsPropertyName: 'airQualityIrradiance',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherPrecipitationTotal',
        tsPropertyName: 'weatherPrecipitationTotal',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportTimeZoneIdentifier',
        tsPropertyName: 'weatherReportTimeZoneIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherVisibility',
        tsPropertyName: 'weatherVisibility',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAirPressure',
        tsPropertyName: 'weatherAirPressure',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWindSpeed',
        tsPropertyName: 'windSpeed',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportSummary',
        tsPropertyName: 'weatherReportSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportDateTime',
        tsPropertyName: 'weatherReportDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportIconInteger',
        tsPropertyName: 'weatherReportIconInteger',
        type: 'number',
        required: false
      }
    ];
  }


}
