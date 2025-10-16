import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Document
 */
export class Document extends VITAL_Node {
  public readonly sourceDomain?: string;
  public readonly docuSignStatus?: string;
  public readonly sentimentMixed?: boolean;
  public readonly documentUrl?: string;
  public readonly contentTag?: string;
  public readonly contentID?: string;
  public readonly documentTitle?: string;
  public readonly extractedTitle?: string;
  public readonly docuSignEnvelopeID?: string;
  public readonly signedVersion?: boolean;
  public readonly documentPublicationDate?: string | Date;
  public readonly lang?: string;
  public readonly body?: string;
  public readonly documentSourceName?: string;
  public readonly documentUrlRoot?: string;
  public readonly dmozPath?: string;
  public readonly sentimentScore?: number;
  public readonly extractedText?: string;
  public readonly slug?: string;
  public readonly analyzedTitle?: string;
  public readonly analyzedBody?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Document
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSourceDomain',
        tsPropertyName: 'sourceDomain',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDocuSignStatus',
        tsPropertyName: 'docuSignStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isSentimentMixed',
        tsPropertyName: 'sentimentMixed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentUrl',
        tsPropertyName: 'documentUrl',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContentTag',
        tsPropertyName: 'contentTag',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContentID',
        tsPropertyName: 'contentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentTitle',
        tsPropertyName: 'documentTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExtractedTitle',
        tsPropertyName: 'extractedTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDocuSignEnvelopeID',
        tsPropertyName: 'docuSignEnvelopeID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSignedVersion',
        tsPropertyName: 'signedVersion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentPublicationDate',
        tsPropertyName: 'documentPublicationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLang',
        tsPropertyName: 'lang',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasBody',
        tsPropertyName: 'body',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentSourceName',
        tsPropertyName: 'documentSourceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentUrlRoot',
        tsPropertyName: 'documentUrlRoot',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDmozPath',
        tsPropertyName: 'dmozPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSentimentScore',
        tsPropertyName: 'sentimentScore',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExtractedText',
        tsPropertyName: 'extractedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSlug',
        tsPropertyName: 'slug',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnalyzedTitle',
        tsPropertyName: 'analyzedTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnalyzedBody',
        tsPropertyName: 'analyzedBody',
        type: 'string',
        required: false
      }
    ];
  }


}
