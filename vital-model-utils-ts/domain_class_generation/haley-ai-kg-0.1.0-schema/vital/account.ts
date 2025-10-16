import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Account
 */
export class Account extends VITAL_Node {
  public readonly accountID?: string;
  public readonly singleSignOnProviderURI?: string;
  public readonly accountLoginSuffix?: string;
  public readonly jwtProviderIdentifier?: string;
  public readonly retired?: boolean;
  public readonly localLoginsValidated?: boolean;
  public readonly locked?: boolean;
  public readonly accountStatusURI?: string;
  public readonly interAccountSearchableRecipient?: boolean;
  public readonly localLoginsType?: string;
  public readonly haleyTestCase?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Account
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountID',
        tsPropertyName: 'accountID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSingleSignOnProviderURI',
        tsPropertyName: 'singleSignOnProviderURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountLoginSuffix',
        tsPropertyName: 'accountLoginSuffix',
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
        propertyURI: 'http://vital.ai/ontology/vital#isRetired',
        tsPropertyName: 'retired',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isLocalLoginsValidated',
        tsPropertyName: 'localLoginsValidated',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isLocked',
        tsPropertyName: 'locked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountStatusURI',
        tsPropertyName: 'accountStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInterAccountSearchableRecipient',
        tsPropertyName: 'interAccountSearchableRecipient',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLocalLoginsType',
        tsPropertyName: 'localLoginsType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isHaleyTestCase',
        tsPropertyName: 'haleyTestCase',
        type: 'boolean',
        required: false
      }
    ];
  }


}
