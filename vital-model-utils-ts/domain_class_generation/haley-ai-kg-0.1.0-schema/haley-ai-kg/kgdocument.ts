import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDocument
 */
export class KGDocument extends KGNode {
  public readonly kGEncodedByteData?: string;
  public readonly kGDocumentSegmentIndex?: number;
  public readonly primaryLanguageType?: string;
  public readonly kGDocumentSegmentTokenLength?: number;
  public readonly kGDocumentURL?: string;
  public readonly kGDocumentExtractedContent?: string;
  public readonly topCategoryURIs?: string;
  public readonly kGDocumentType?: string;
  public readonly kGDocumentSegmentMethodURI?: string;
  public readonly kGDocumentEndTokenIndex?: number;
  public readonly kGDocumentRetrievalDateTime?: string | Date;
  public readonly kGDocumentPublicationDateTime?: string | Date;
  public readonly kGDocumentTokenLength?: number;
  public readonly kGDocumentStartTokenIndex?: number;
  public readonly kGContentType?: string;
  public readonly kGDocumentDescription?: string;
  public readonly kGDocumentContent?: string;
  public readonly kGDocumentHeadline?: string;
  public readonly kGDocumentSegmentTypeURI?: string;
  public readonly kGDocumentSummary?: string;
  public readonly kGDocumentHTMLContent?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData',
        tsPropertyName: 'kGEncodedByteData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentIndex',
        tsPropertyName: 'kGDocumentSegmentIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType',
        tsPropertyName: 'primaryLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTokenLength',
        tsPropertyName: 'kGDocumentSegmentTokenLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentURL',
        tsPropertyName: 'kGDocumentURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentExtractedContent',
        tsPropertyName: 'kGDocumentExtractedContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTopCategoryURIs',
        tsPropertyName: 'topCategoryURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType',
        tsPropertyName: 'kGDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentMethodURI',
        tsPropertyName: 'kGDocumentSegmentMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentEndTokenIndex',
        tsPropertyName: 'kGDocumentEndTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentRetrievalDateTime',
        tsPropertyName: 'kGDocumentRetrievalDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentPublicationDateTime',
        tsPropertyName: 'kGDocumentPublicationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentTokenLength',
        tsPropertyName: 'kGDocumentTokenLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentStartTokenIndex',
        tsPropertyName: 'kGDocumentStartTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGContentType',
        tsPropertyName: 'kGContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentDescription',
        tsPropertyName: 'kGDocumentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentContent',
        tsPropertyName: 'kGDocumentContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHeadline',
        tsPropertyName: 'kGDocumentHeadline',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTypeURI',
        tsPropertyName: 'kGDocumentSegmentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSummary',
        tsPropertyName: 'kGDocumentSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHTMLContent',
        tsPropertyName: 'kGDocumentHTMLContent',
        type: 'string',
        required: false
      }
    ];
  }


}
