import { VitalServiceConfig } from './vitalServiceConfig.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig
 */
export class VitalServiceIndexedDBConfig extends VitalServiceConfig {
  public readonly selectQueries?: string;
  public readonly graphQueries?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalServiceIndexedDBConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSelectQueries',
        tsPropertyName: 'selectQueries',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasGraphQueries',
        tsPropertyName: 'graphQueries',
        type: 'string',
        required: false
      }
    ];
  }


}
