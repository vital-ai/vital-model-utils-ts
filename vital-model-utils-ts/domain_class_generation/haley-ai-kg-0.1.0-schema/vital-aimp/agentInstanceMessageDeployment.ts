import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstanceMessageDeployment
 */
export class AgentInstanceMessageDeployment extends VITAL_Node {
  public readonly agentMessageTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentInstanceMessageDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentMessageTypeURI',
        tsPropertyName: 'agentMessageTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
