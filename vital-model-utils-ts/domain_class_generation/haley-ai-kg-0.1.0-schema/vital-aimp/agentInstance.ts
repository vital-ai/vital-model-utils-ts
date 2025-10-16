import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstance
 */
export class AgentInstance extends VITAL_Node {
  public readonly agentInstanceIdentifier?: string;
  public readonly agentInstanceTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceIdentifier',
        tsPropertyName: 'agentInstanceIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceTypeURI',
        tsPropertyName: 'agentInstanceTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
