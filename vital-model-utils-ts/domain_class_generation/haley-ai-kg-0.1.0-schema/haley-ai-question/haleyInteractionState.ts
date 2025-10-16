import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionState
 */
export class HaleyInteractionState extends VITAL_Node {
  public readonly haleyState?: string;
  public readonly haleyInteractionFlowStepInstanceURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionState
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyState',
        tsPropertyName: 'haleyState',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepInstanceURI',
        tsPropertyName: 'haleyInteractionFlowStepInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
