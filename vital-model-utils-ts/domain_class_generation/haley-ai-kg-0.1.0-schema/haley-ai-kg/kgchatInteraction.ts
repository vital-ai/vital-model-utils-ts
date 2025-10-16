import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatInteraction
 */
export class KGChatInteraction extends KGNode {
  public readonly kGChatInteractionSummaryText?: string;
  public readonly kGChannelURI?: string;
  public readonly kGRoomURI?: string;
  public readonly kGChatInteractionCompleteText?: string;
  public readonly kGChatInteractionType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGChatInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionSummaryText',
        tsPropertyName: 'kGChatInteractionSummaryText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChannelURI',
        tsPropertyName: 'kGChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRoomURI',
        tsPropertyName: 'kGRoomURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionCompleteText',
        tsPropertyName: 'kGChatInteractionCompleteText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionType',
        tsPropertyName: 'kGChatInteractionType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
