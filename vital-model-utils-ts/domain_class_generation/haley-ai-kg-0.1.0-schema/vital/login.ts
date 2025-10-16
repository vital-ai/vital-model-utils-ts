import { CredentialsLogin } from './credentialsLogin.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Login
 */
export class Login extends CredentialsLogin {
  public readonly singleSignOnIdentifier?: string;
  public readonly serviceLogin?: boolean;
  public readonly loginOnboardingStatusURI?: string;
  public readonly haleyTestCase?: boolean;
  public readonly loginStatusURI?: string;
  public readonly accountInternalAdmin?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Login
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSingleSignOnIdentifier',
        tsPropertyName: 'singleSignOnIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isServiceLogin',
        tsPropertyName: 'serviceLogin',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginOnboardingStatusURI',
        tsPropertyName: 'loginOnboardingStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isHaleyTestCase',
        tsPropertyName: 'haleyTestCase',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginStatusURI',
        tsPropertyName: 'loginStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAccountInternalAdmin',
        tsPropertyName: 'accountInternalAdmin',
        type: 'boolean',
        required: false
      }
    ];
  }


}
