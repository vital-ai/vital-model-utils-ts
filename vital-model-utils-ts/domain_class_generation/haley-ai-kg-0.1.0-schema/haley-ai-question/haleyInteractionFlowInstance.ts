import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance
 */
export class HaleyInteractionFlowInstance extends VITAL_Node {
  public readonly haleyInteractionFlowURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionFlowInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
