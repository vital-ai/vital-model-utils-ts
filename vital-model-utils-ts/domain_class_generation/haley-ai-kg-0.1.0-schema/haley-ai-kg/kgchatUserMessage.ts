import { KGChatMessage } from './kgchatMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatUserMessage
 */
export class KGChatUserMessage extends KGChatMessage {
  public readonly kGActorURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGChatUserMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActorURI',
        tsPropertyName: 'kGActorURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
