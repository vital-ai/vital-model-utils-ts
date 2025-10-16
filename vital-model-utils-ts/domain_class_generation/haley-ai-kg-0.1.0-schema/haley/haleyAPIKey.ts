import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAPIKey
 */
export class HaleyAPIKey extends VITAL_Node {
  public readonly aPIKeySessionKeyIdentifier?: string;
  public readonly encryptedAPIKey?: string;
  public readonly aPIKeyIdentifier?: string;
  public readonly aPIKey?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAPIKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAPIKeySessionKeyIdentifier',
        tsPropertyName: 'aPIKeySessionKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEncryptedAPIKey',
        tsPropertyName: 'encryptedAPIKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAPIKeyIdentifier',
        tsPropertyName: 'aPIKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAPIKey',
        tsPropertyName: 'aPIKey',
        type: 'string',
        required: false
      }
    ];
  }


}
