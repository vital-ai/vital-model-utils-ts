import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceContainerDeployment
 */
export class AgentInstanceContainerDeployment extends VITAL_Node {
  public readonly containerLoadBalancerName?: string;
  public readonly containerClusterName?: string;
  public readonly containerImageIdentifier?: string;
  public readonly containerStoppedDateTime?: string | Date;
  public readonly containerLaunchDateTime?: string | Date;
  public readonly containerServiceName?: string;
  public readonly containerTaskName?: string;
  public readonly containerTaskMinimumCount?: number;
  public readonly containerRepository?: string;
  public readonly containerTaskMaximumCount?: number;
  public readonly containerLoadBalancerURL?: string;
  public readonly agentInstanceContainerDeploymentStatusTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentInstanceContainerDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerLoadBalancerName',
        tsPropertyName: 'containerLoadBalancerName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerClusterName',
        tsPropertyName: 'containerClusterName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerImageIdentifier',
        tsPropertyName: 'containerImageIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerStoppedDateTime',
        tsPropertyName: 'containerStoppedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerLaunchDateTime',
        tsPropertyName: 'containerLaunchDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerServiceName',
        tsPropertyName: 'containerServiceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerTaskName',
        tsPropertyName: 'containerTaskName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerTaskMinimumCount',
        tsPropertyName: 'containerTaskMinimumCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerRepository',
        tsPropertyName: 'containerRepository',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerTaskMaximumCount',
        tsPropertyName: 'containerTaskMaximumCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasContainerLoadBalancerURL',
        tsPropertyName: 'containerLoadBalancerURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceContainerDeploymentStatusTypeURI',
        tsPropertyName: 'agentInstanceContainerDeploymentStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
