import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceDeployment
 */
export class AgentInstanceDeployment extends VITAL_Node {
  public readonly agentInstanceDeploymentPathURI?: string;
  public readonly agentInstanceDeploymentTypeURI?: string;
  public readonly agentInstanceDeploymentImplTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentInstanceDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentPathURI',
        tsPropertyName: 'agentInstanceDeploymentPathURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentTypeURI',
        tsPropertyName: 'agentInstanceDeploymentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentImplTypeURI',
        tsPropertyName: 'agentInstanceDeploymentImplTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
