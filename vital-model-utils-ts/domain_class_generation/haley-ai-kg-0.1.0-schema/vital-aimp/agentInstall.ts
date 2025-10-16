import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentInstall
 */
export class AgentInstall extends VITAL_Node {
  public readonly agentInstallTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AgentInstall
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstallTypeURI',
        tsPropertyName: 'agentInstallTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
