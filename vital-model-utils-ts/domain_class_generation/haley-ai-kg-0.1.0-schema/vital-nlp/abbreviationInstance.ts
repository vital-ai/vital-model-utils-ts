import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#AbbreviationInstance
 */
export class AbbreviationInstance extends VITAL_Node {
  public readonly longFormEnd?: number;
  public readonly shortFormEnd?: number;
  public readonly longFormStart?: number;
  public readonly longForm?: string;
  public readonly shortForm?: string;
  public readonly shortFormStart?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AbbreviationInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongFormEnd',
        tsPropertyName: 'longFormEnd',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortFormEnd',
        tsPropertyName: 'shortFormEnd',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongFormStart',
        tsPropertyName: 'longFormStart',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLongForm',
        tsPropertyName: 'longForm',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortForm',
        tsPropertyName: 'shortForm',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortFormStart',
        tsPropertyName: 'shortFormStart',
        type: 'number',
        required: false
      }
    ];
  }


}
