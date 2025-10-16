import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#JWTPubKey
 */
export class JWTPubKey extends VITAL_Node {
  public readonly jwtProviderIdentifier?: string;
  public readonly jwtKeyIdentifier?: string;
  public readonly jwtPubKeyString?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for JWTPubKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtProviderIdentifier',
        tsPropertyName: 'jwtProviderIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtKeyIdentifier',
        tsPropertyName: 'jwtKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtPubKeyString',
        tsPropertyName: 'jwtPubKeyString',
        type: 'string',
        required: false
      }
    ];
  }


}
