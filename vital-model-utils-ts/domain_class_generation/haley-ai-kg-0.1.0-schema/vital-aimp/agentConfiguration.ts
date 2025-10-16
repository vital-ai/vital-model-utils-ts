import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentConfiguration
 */
export class AgentConfiguration extends VITAL_Node {
  public readonly agentConfigurationIdentifier?: string;
  public readonly agentConfigurationVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentConfiguration
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentConfigurationIdentifier',
        tsPropertyName: 'agentConfigurationIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentConfigurationVersion',
        tsPropertyName: 'agentConfigurationVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
