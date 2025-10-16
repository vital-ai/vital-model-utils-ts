import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Agent
 */
export class Agent extends VITAL_Node {
  public readonly agentTypeURI?: string;
  public readonly agentStatusTypeURI?: string;
  public readonly agentDistributionTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Agent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentTypeURI',
        tsPropertyName: 'agentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentStatusTypeURI',
        tsPropertyName: 'agentStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentDistributionTypeURI',
        tsPropertyName: 'agentDistributionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
