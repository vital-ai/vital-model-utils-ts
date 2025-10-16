import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGInteraction
 */
export class KGInteraction extends KGNode {
  public readonly interactionSequence?: number;
  public readonly kGInteractionType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasInteractionSequence',
        tsPropertyName: 'interactionSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType',
        tsPropertyName: 'kGInteractionType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
