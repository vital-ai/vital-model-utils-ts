import { KGChatMessage } from './kgchatMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatBotMessage
 */
export class KGChatBotMessage extends KGChatMessage {
  public readonly kGAgentURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGChatBotMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentURI',
        tsPropertyName: 'kGAgentURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
