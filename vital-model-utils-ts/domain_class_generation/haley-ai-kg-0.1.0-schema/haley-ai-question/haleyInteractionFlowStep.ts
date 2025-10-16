import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep
 */
export class HaleyInteractionFlowStep extends VITAL_Node {
  public readonly haleyInteractionFlowStepStateOptionURIs?: string;
  public readonly haleyInteractionFlowURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionFlowStep
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateOptionURIs',
        tsPropertyName: 'haleyInteractionFlowStepStateOptionURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowURI',
        tsPropertyName: 'haleyInteractionFlowURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
