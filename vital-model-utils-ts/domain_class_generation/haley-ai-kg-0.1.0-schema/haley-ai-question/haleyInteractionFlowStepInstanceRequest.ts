import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest
 */
export class HaleyInteractionFlowStepInstanceRequest extends VITAL_Node {
  public readonly interactionFlowStepCommandRequestURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionFlowStepInstanceRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepCommandRequestURI',
        tsPropertyName: 'interactionFlowStepCommandRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
