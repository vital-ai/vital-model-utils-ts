import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatInteractionEvent
 */
export class KGChatInteractionEvent extends KGNode {
  public readonly kGChatInteractionEventType?: string;
  public readonly kGServiceEventURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGChatInteractionEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionEventType',
        tsPropertyName: 'kGChatInteractionEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventURI',
        tsPropertyName: 'kGServiceEventURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
