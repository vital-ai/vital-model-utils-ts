import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountResourceLock
 */
export class AccountResourceLock extends VITAL_Node {
  public readonly accountResourceLockAccountURI?: string;
  public readonly accountResourceLockUserLoginURI?: string;
  public readonly accountResourceTypeURI?: string;
  public readonly accountResourceLockTypeURI?: string;
  public readonly accountResourceLockStatusURI?: string;
  public readonly accountResourceLockOwnerIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountResourceLock
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockAccountURI',
        tsPropertyName: 'accountResourceLockAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockUserLoginURI',
        tsPropertyName: 'accountResourceLockUserLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceTypeURI',
        tsPropertyName: 'accountResourceTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockTypeURI',
        tsPropertyName: 'accountResourceLockTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockStatusURI',
        tsPropertyName: 'accountResourceLockStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountResourceLockOwnerIdentifier',
        tsPropertyName: 'accountResourceLockOwnerIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
