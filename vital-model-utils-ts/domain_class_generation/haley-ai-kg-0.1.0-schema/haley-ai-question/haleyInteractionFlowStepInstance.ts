import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstance
 */
export class HaleyInteractionFlowStepInstance extends VITAL_Node {
  public readonly interactionFlowStepInstanceSecondaryIndex?: number;
  public readonly interactionFlowStepInstanceRowInstanceURI?: string;
  public readonly haleyInteractionFlowStepStateURI?: string;
  public readonly interactionFlowStepInstanceRowRowInstanceURI?: string;
  public readonly interactionFlowStepInstanceGroupInstanceURI?: string;
  public readonly haleyInteractionFlowStepURI?: string;
  public readonly interactionFlowStepInstanceTertiaryIndex?: number;
  public readonly interactionFlowStepInstanceIndex?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionFlowStepInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceSecondaryIndex',
        tsPropertyName: 'interactionFlowStepInstanceSecondaryIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceRowInstanceURI',
        tsPropertyName: 'interactionFlowStepInstanceRowInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateURI',
        tsPropertyName: 'haleyInteractionFlowStepStateURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceRowRowInstanceURI',
        tsPropertyName: 'interactionFlowStepInstanceRowRowInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceGroupInstanceURI',
        tsPropertyName: 'interactionFlowStepInstanceGroupInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepURI',
        tsPropertyName: 'haleyInteractionFlowStepURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceTertiaryIndex',
        tsPropertyName: 'interactionFlowStepInstanceTertiaryIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepInstanceIndex',
        tsPropertyName: 'interactionFlowStepInstanceIndex',
        type: 'number',
        required: false
      }
    ];
  }


}
