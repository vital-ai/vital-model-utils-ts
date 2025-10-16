import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#LoginAuth
 */
export class LoginAuth extends VITAL_Node {
  public readonly loginAuthForcePasswordReset?: boolean;
  public readonly loginAuthLocked?: boolean;
  public readonly loginAuthLockedDateTime?: string | Date;
  public readonly username?: string;
  public readonly loginAttemptCount?: number;
  public readonly password?: string;
  public readonly lastLoginAttemptDateTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for LoginAuth
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isLoginAuthForcePasswordReset',
        tsPropertyName: 'loginAuthForcePasswordReset',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isLoginAuthLocked',
        tsPropertyName: 'loginAuthLocked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginAuthLockedDateTime',
        tsPropertyName: 'loginAuthLockedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginAttemptCount',
        tsPropertyName: 'loginAttemptCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPassword',
        tsPropertyName: 'password',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastLoginAttemptDateTime',
        tsPropertyName: 'lastLoginAttemptDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
