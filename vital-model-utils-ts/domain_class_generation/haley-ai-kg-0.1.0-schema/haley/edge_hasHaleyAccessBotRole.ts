import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole
 */
export class Edge_hasHaleyAccessBotRole extends VITAL_PeerEdge {
  public readonly accessRoleScopeChannelURI?: string;
  public readonly accessRoleScopeTeamURI?: string;
  public readonly accessRoleScopeBotURI?: string;
  public readonly accessRoleScopeGroupURI?: string;
  public readonly accessRoleScopeAccountURI?: string;
  public readonly accessRoleScopeDatasetURI?: string;
  public readonly accessRoleScopeOfficeURI?: string;
  public readonly accessRoleScopeLoginURI?: string;
  public readonly accessRoleScopeURI?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasHaleyAccessBotRole
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeChannelURI',
        tsPropertyName: 'accessRoleScopeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeTeamURI',
        tsPropertyName: 'accessRoleScopeTeamURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeBotURI',
        tsPropertyName: 'accessRoleScopeBotURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeGroupURI',
        tsPropertyName: 'accessRoleScopeGroupURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeAccountURI',
        tsPropertyName: 'accessRoleScopeAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeDatasetURI',
        tsPropertyName: 'accessRoleScopeDatasetURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeOfficeURI',
        tsPropertyName: 'accessRoleScopeOfficeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeLoginURI',
        tsPropertyName: 'accessRoleScopeLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRoleScopeURI',
        tsPropertyName: 'accessRoleScopeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccessBotRole
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessBotRole';
  }
}
