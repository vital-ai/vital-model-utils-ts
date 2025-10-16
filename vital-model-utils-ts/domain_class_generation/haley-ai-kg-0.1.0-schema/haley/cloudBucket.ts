import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudBucket
 */
export class CloudBucket extends HaleyCloud {
  public readonly bucketPath?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudBucket
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBucketPath',
        tsPropertyName: 'bucketPath',
        type: 'string',
        required: false
      }
    ];
  }


}
