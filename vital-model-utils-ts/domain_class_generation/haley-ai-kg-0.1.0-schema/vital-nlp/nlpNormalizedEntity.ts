import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpNormalizedEntity
 */
export class NlpNormalizedEntity extends VITAL_Node {
  public readonly heightPx?: number;
  public readonly ticker?: string;
  public readonly widthPx?: number;
  public readonly context?: string;
  public readonly shortname?: string;
  public readonly symbol?: string;
  public readonly nlpEntityCategory?: string;
  public readonly entityType?: string;
  public readonly nameVariants?: string;
  public readonly imageDate?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for NlpNormalizedEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasHeightPx',
        tsPropertyName: 'heightPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTicker',
        tsPropertyName: 'ticker',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasWidthPx',
        tsPropertyName: 'widthPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContext',
        tsPropertyName: 'context',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortname',
        tsPropertyName: 'shortname',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSymbol',
        tsPropertyName: 'symbol',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNlpEntityCategory',
        tsPropertyName: 'nlpEntityCategory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityType',
        tsPropertyName: 'entityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNameVariants',
        tsPropertyName: 'nameVariants',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasImageDate',
        tsPropertyName: 'imageDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
