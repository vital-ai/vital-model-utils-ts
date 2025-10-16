import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#UserLogin
 */
export class UserLogin extends VITAL_Node {
  public readonly emailAddress?: string;
  public readonly emailVerified?: boolean;
  public readonly locked?: boolean;
  public readonly verificationCode?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for UserLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasEmailAddress',
        tsPropertyName: 'emailAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isEmailVerified',
        tsPropertyName: 'emailVerified',
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
        propertyURI: 'http://vital.ai/ontology/vital#hasVerificationCode',
        tsPropertyName: 'verificationCode',
        type: 'string',
        required: false
      }
    ];
  }


}
