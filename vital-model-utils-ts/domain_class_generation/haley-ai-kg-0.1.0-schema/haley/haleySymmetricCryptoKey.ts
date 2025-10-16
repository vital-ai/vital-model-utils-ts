import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleySymmetricCryptoKey
 */
export class HaleySymmetricCryptoKey extends VITAL_Node {
  public readonly symmetricCryptoKey?: string;
  public readonly symmetricCryptoKeyIdentifier?: string;
  public readonly symmetricCryptoKeyGenerationDateTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleySymmetricCryptoKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasSymmetricCryptoKey',
        tsPropertyName: 'symmetricCryptoKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasSymmetricCryptoKeyIdentifier',
        tsPropertyName: 'symmetricCryptoKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasSymmetricCryptoKeyGenerationDateTime',
        tsPropertyName: 'symmetricCryptoKeyGenerationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
