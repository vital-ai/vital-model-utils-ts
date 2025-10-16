import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNoteDocument
 */
export class KGNoteDocument extends KGNode {
  public readonly kGNoteDocumentContent?: string;
  public readonly kGNoteDocumentTitle?: string;
  public readonly kGNoteDocumentType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGNoteDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNoteDocumentContent',
        tsPropertyName: 'kGNoteDocumentContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNoteDocumentTitle',
        tsPropertyName: 'kGNoteDocumentTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNoteDocumentType',
        tsPropertyName: 'kGNoteDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
