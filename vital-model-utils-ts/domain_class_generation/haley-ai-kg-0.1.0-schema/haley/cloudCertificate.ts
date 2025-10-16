import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudCertificate
 */
export class CloudCertificate extends HaleyCloud {
  public readonly cloudCertificateStatusURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudCertificate
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCloudCertificateStatusURI',
        tsPropertyName: 'cloudCertificateStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
