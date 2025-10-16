import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCryptoKey
 */
export class HaleyCryptoKey extends VITAL_Node {
  /** URI reference to one of: Login, HaleyAccount */
  public readonly keySubject?: http://vital.ai/ontology/vital#Login | http://vital.ai/ontology/haley#HaleyAccount;
  public readonly keyHash?: string;
  public readonly encryptedKey?: string;
  public readonly keySubjectIdentity?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyCryptoKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasKeySubject',
        tsPropertyName: 'keySubject',
        type: 'http://vital.ai/ontology/vital#Login | http://vital.ai/ontology/haley#HaleyAccount',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasKeyHash',
        tsPropertyName: 'keyHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEncryptedKey',
        tsPropertyName: 'encryptedKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasKeySubjectIdentity',
        tsPropertyName: 'keySubjectIdentity',
        type: 'string',
        required: false
      }
    ];
  }


}
