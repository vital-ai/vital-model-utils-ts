import { VitalServiceConfig } from './vitalServiceConfig.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig
 */
export class VitalServiceAllegrographConfig extends VitalServiceConfig {
  public readonly username?: string;
  public readonly serverURL?: string;
  public readonly password?: string;
  public readonly catalogName?: string;
  public readonly poolMaxTotal?: number;
  public readonly repositoryName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalServiceAllegrographConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasServerURL',
        tsPropertyName: 'serverURL',
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
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCatalogName',
        tsPropertyName: 'catalogName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPoolMaxTotal',
        tsPropertyName: 'poolMaxTotal',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRepositoryName',
        tsPropertyName: 'repositoryName',
        type: 'string',
        required: false
      }
    ];
  }


}
