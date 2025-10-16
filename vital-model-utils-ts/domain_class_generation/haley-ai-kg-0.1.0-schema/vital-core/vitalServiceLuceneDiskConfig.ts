import { VitalServiceConfig } from './vitalServiceConfig.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig
 */
export class VitalServiceLuceneDiskConfig extends VitalServiceConfig {
  public readonly rootPath?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalServiceLuceneDiskConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRootPath',
        tsPropertyName: 'rootPath',
        type: 'string',
        required: false
      }
    ];
  }


}
