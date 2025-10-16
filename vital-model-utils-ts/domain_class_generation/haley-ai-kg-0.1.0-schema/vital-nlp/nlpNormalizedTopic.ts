import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpNormalizedTopic
 */
export class NlpNormalizedTopic extends VITAL_Node {
  public readonly shortname?: string;
  public readonly nameVariants?: string;
  public readonly heightPx?: number;
  public readonly widthPx?: number;
  public readonly imageDate?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for NlpNormalizedTopic
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortname',
        tsPropertyName: 'shortname',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNameVariants',
        tsPropertyName: 'nameVariants',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasHeightPx',
        tsPropertyName: 'heightPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasWidthPx',
        tsPropertyName: 'widthPx',
        type: 'number',
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
