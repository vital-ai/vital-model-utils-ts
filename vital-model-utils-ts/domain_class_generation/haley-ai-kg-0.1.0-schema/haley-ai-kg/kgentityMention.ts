import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntityMention
 */
export class KGEntityMention extends KGNode {
  public readonly kGEntityAccountURI?: string;
  public readonly kGEntityTypeDescription?: string;
  public readonly kGEntityType?: string;
  public readonly kGTypeMethodURI?: string;
  public readonly kGExtractTaskURI?: string;
  public readonly kGEntityLoginURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGEntityMention
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityAccountURI',
        tsPropertyName: 'kGEntityAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityTypeDescription',
        tsPropertyName: 'kGEntityTypeDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityType',
        tsPropertyName: 'kGEntityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTypeMethodURI',
        tsPropertyName: 'kGTypeMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExtractTaskURI',
        tsPropertyName: 'kGExtractTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityLoginURI',
        tsPropertyName: 'kGEntityLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
