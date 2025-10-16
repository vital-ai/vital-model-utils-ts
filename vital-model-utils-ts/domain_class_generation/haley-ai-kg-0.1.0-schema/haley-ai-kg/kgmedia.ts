import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMedia
 */
export class KGMedia extends KGNode {
  public readonly kGContentType?: string;
  public readonly kGMediaEncoding?: string;
  public readonly kGEncodedByteData?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGMedia
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGContentType',
        tsPropertyName: 'kGContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGMediaEncoding',
        tsPropertyName: 'kGMediaEncoding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData',
        tsPropertyName: 'kGEncodedByteData',
        type: 'string',
        required: false
      }
    ];
  }


}
