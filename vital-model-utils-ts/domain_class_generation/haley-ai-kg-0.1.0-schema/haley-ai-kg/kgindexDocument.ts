import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIndexDocument
 */
export class KGIndexDocument extends VITAL_Node {
  public readonly documentHeadline?: string;
  public readonly documentVersion?: string;
  public readonly documentHTMLContent?: string;
  public readonly documentAuthorList?: string;
  public readonly documentDescription?: string;
  public readonly documentPublicationDateTime?: string | Date;
  public readonly documentURL?: string;
  public readonly documentCorrectedURL?: string;
  public readonly documentRetrievalDateTime?: string | Date;
  public readonly documentContentType?: string;
  public readonly documentContentPath?: string;
  public readonly kGIndexDocumentClassificationURI?: string;
  public readonly kGIndexDocumentStorageTypeURI?: string;
  public readonly documentOriginalURL?: string;
  public readonly kGIndexDocumentStatusURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGIndexDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentHeadline',
        tsPropertyName: 'documentHeadline',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentVersion',
        tsPropertyName: 'documentVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentHTMLContent',
        tsPropertyName: 'documentHTMLContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAuthorList',
        tsPropertyName: 'documentAuthorList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentDescription',
        tsPropertyName: 'documentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentPublicationDateTime',
        tsPropertyName: 'documentPublicationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentURL',
        tsPropertyName: 'documentURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL',
        tsPropertyName: 'documentCorrectedURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentRetrievalDateTime',
        tsPropertyName: 'documentRetrievalDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentContentType',
        tsPropertyName: 'documentContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentContentPath',
        tsPropertyName: 'documentContentPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentClassificationURI',
        tsPropertyName: 'kGIndexDocumentClassificationURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStorageTypeURI',
        tsPropertyName: 'kGIndexDocumentStorageTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL',
        tsPropertyName: 'documentOriginalURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStatusURI',
        tsPropertyName: 'kGIndexDocumentStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
