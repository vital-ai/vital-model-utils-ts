import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant
 */
export class HyperEdge_hasAccessGrant extends VITAL_HyperEdge {
  /** URI reference to one of: VITAL_HyperEdge, VITAL_GraphContainerObject, VITAL_Edge, VITAL_Node, VITAL_HyperNode */
  public readonly accessGrantMemberURIs?: http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode;
  public readonly accessObjectTypes?: string;
  /** URI reference to one of: Login, AdminLogin */
  public readonly accessGrantProviderLogin?: http://vital.ai/ontology/vital#Login | http://vital.ai/ontology/vital#AdminLogin;
  public readonly accessGrantProviderBot?: string;
  public readonly accessGrantProviderAccount?: string;
  public readonly accessGrantGroupInstanceMemberURIs?: string;
  public readonly accessGrantStatusURI?: string;
  public readonly accessGrantType?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, hyperEdgeSource, hyperEdgeDestination);

  }

  /**
   * Get property definitions for HyperEdge_hasAccessGrant
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantMemberURIs',
        tsPropertyName: 'accessGrantMemberURIs',
        type: 'http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessObjectTypes',
        tsPropertyName: 'accessObjectTypes',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantProviderLogin',
        tsPropertyName: 'accessGrantProviderLogin',
        type: 'http://vital.ai/ontology/vital#Login | http://vital.ai/ontology/vital#AdminLogin',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantProviderBot',
        tsPropertyName: 'accessGrantProviderBot',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantProviderAccount',
        tsPropertyName: 'accessGrantProviderAccount',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAccessGrantGroupInstanceMemberURIs',
        tsPropertyName: 'accessGrantGroupInstanceMemberURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantStatusURI',
        tsPropertyName: 'accessGrantStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantType',
        tsPropertyName: 'accessGrantType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasAccessGrant
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant';
  }
}
