import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessGrant
 */
export class HaleyAccessGrant extends VITAL_Node {
  public readonly loginURI?: string;
  public readonly roleGrantAspectURI?: string;
  public readonly accountURI?: string;
  public readonly roleGrantTypeURI?: string;
  public readonly haleyAccessRightURI?: string;
  public readonly roleGrantExtentURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccessGrant
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantAspectURI',
        tsPropertyName: 'roleGrantAspectURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantTypeURI',
        tsPropertyName: 'roleGrantTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightURI',
        tsPropertyName: 'haleyAccessRightURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantExtentURI',
        tsPropertyName: 'roleGrantExtentURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
