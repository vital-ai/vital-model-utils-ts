import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudCodePath
 */
export class CloudCodePath extends HaleyCloud {
  public readonly codePath?: string;
  public readonly cloudCodePathTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudCodePath
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCodePath',
        tsPropertyName: 'codePath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCloudCodePathTypeURI',
        tsPropertyName: 'cloudCodePathTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
