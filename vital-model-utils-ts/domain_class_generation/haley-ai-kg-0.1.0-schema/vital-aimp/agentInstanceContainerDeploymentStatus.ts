import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceContainerDeploymentStatus
 */
export class AgentInstanceContainerDeploymentStatus extends VITAL_Node {
  public readonly agentInstanceContainerDeploymentStatusMessage?: string;
  public readonly agentInstanceDeploymentURI?: string;
  public readonly agentInstanceContainerDeploymentStatusTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentInstanceContainerDeploymentStatus
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceContainerDeploymentStatusMessage',
        tsPropertyName: 'agentInstanceContainerDeploymentStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentURI',
        tsPropertyName: 'agentInstanceDeploymentURI',
        type: 'string',
        required: false,
        format: 'uri'
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
