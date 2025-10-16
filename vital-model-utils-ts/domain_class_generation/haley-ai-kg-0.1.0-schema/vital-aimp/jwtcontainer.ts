import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#JWTContainer
 */
export class JWTContainer extends VITAL_Node {
  public readonly jwtEncodedString?: string;
  public readonly jwtProviderIdentifier?: string;
  public readonly jwtVerified?: boolean;
  public readonly jweProviderIdentifier?: string;
  public readonly jwtKeyIdentifier?: string;
  public readonly jweEncryptedString?: string;
  public readonly jwtJSON?: string;
  public readonly jweKeyIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for JWTContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtEncodedString',
        tsPropertyName: 'jwtEncodedString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtProviderIdentifier',
        tsPropertyName: 'jwtProviderIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isJwtVerified',
        tsPropertyName: 'jwtVerified',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweProviderIdentifier',
        tsPropertyName: 'jweProviderIdentifier',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweEncryptedString',
        tsPropertyName: 'jweEncryptedString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtJSON',
        tsPropertyName: 'jwtJSON',
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
