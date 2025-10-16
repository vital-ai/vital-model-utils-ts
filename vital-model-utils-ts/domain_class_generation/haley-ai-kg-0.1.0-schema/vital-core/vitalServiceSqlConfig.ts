import { VitalServiceConfig } from './vitalServiceConfig.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceSqlConfig
 */
export class VitalServiceSqlConfig extends VitalServiceConfig {
  public readonly poolInitialSize?: number;
  public readonly dbType?: string;
  public readonly endpointURL?: string;
  public readonly username?: string;
  public readonly password?: string;
  public readonly poolMaxTotal?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalServiceSqlConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPoolInitialSize',
        tsPropertyName: 'poolInitialSize',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDbType',
        tsPropertyName: 'dbType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEndpointURL',
        tsPropertyName: 'endpointURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPassword',
        tsPropertyName: 'password',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPoolMaxTotal',
        tsPropertyName: 'poolMaxTotal',
        type: 'number',
        required: false
      }
    ];
  }


}
