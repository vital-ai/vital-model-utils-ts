import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpEntity
 */
export class NlpEntity extends VITAL_Node {
  public readonly relevance?: number;
  public readonly extractSource?: string;
  public readonly nlpEntityCategory?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for NlpEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasRelevance',
        tsPropertyName: 'relevance',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExtractSource',
        tsPropertyName: 'extractSource',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNlpEntityCategory',
        tsPropertyName: 'nlpEntityCategory',
        type: 'string',
        required: false
      }
    ];
  }


}
