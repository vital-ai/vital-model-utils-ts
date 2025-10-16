import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatMessage
 */
export class KGChatMessage extends KGNode {
  public readonly kGChatInteractionURI?: string;
  public readonly kGChatMessageText?: string;
  public readonly kGRoomURI?: string;
  public readonly kGChatMessageSequence?: number;
  public readonly kGChatMessageDateTime?: string | Date;
  public readonly primaryLanguageType?: string;
  public readonly kGChatMessageType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGChatMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionURI',
        tsPropertyName: 'kGChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageText',
        tsPropertyName: 'kGChatMessageText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRoomURI',
        tsPropertyName: 'kGRoomURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageSequence',
        tsPropertyName: 'kGChatMessageSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageDateTime',
        tsPropertyName: 'kGChatMessageDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType',
        tsPropertyName: 'primaryLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageType',
        tsPropertyName: 'kGChatMessageType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
