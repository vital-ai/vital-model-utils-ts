import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#JWEPubKey
 */
export class JWEPubKey extends VITAL_Node {
  public readonly jweProviderIdentifier?: string;
  public readonly jwePubKeyString?: string;
  public readonly jweKeyIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for JWEPubKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweProviderIdentifier',
        tsPropertyName: 'jweProviderIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwePubKeyString',
        tsPropertyName: 'jwePubKeyString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweKeyIdentifier',
        tsPropertyName: 'jweKeyIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
