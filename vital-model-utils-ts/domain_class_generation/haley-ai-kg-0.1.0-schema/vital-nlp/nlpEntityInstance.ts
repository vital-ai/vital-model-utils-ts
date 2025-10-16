import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpEntityInstance
 */
export class NlpEntityInstance extends VITAL_Node {
  public readonly entityOffsetInSentence?: number;
  public readonly length?: number;
  public readonly sentimentScore?: number;
  public readonly lengthInSentence?: number;
  public readonly entityAuthor?: string;
  public readonly spanType?: string;
  public readonly sentimentMixed?: boolean;
  public readonly exactString?: string;
  public readonly entityOffset?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for NlpEntityInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityOffsetInSentence',
        tsPropertyName: 'entityOffsetInSentence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLength',
        tsPropertyName: 'length',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSentimentScore',
        tsPropertyName: 'sentimentScore',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLengthInSentence',
        tsPropertyName: 'lengthInSentence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityAuthor',
        tsPropertyName: 'entityAuthor',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSpanType',
        tsPropertyName: 'spanType',
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
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExactString',
        tsPropertyName: 'exactString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityOffset',
        tsPropertyName: 'entityOffset',
        type: 'number',
        required: false
      }
    ];
  }


}
