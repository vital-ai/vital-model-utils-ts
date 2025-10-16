import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRunDocument
 */
export class KGRunDocument extends KGNode {
  public readonly kGRunCodeOutput?: string;
  public readonly kGRunDocumentType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRunDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRunCodeOutput',
        tsPropertyName: 'kGRunCodeOutput',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRunDocumentType',
        tsPropertyName: 'kGRunDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
