import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Sentence
 */
export class Sentence extends VITAL_Node {
  public readonly sentenceNumber?: number;
  public readonly tokensTextString?: string;
  public readonly startPosition?: number;
  public readonly posTagsValuesString?: string;
  public readonly tokensPositionsString?: string;
  public readonly endPosition?: number;
  public readonly posTagsConfidenceString?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Sentence
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSentenceNumber',
        tsPropertyName: 'sentenceNumber',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTokensTextString',
        tsPropertyName: 'tokensTextString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartPosition',
        tsPropertyName: 'startPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasPosTagsValuesString',
        tsPropertyName: 'posTagsValuesString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTokensPositionsString',
        tsPropertyName: 'tokensPositionsString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndPosition',
        tsPropertyName: 'endPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasPosTagsConfidenceString',
        tsPropertyName: 'posTagsConfidenceString',
        type: 'string',
        required: false
      }
    ];
  }


}
