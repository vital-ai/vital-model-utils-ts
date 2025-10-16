import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance
 */
export class HaleyInteractionFlowStepActionInstance extends VITAL_Node {
  public readonly haleyInteractionFlowStepActionURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionFlowStepActionInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepActionURI',
        tsPropertyName: 'haleyInteractionFlowStepActionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
