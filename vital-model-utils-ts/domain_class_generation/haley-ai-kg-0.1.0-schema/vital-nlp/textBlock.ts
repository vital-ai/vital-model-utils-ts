import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#TextBlock
 */
export class TextBlock extends VITAL_Node {
  public readonly textBlockLength?: number;
  public readonly textBlockText?: string;
  public readonly textBlockOffset?: number;
  public readonly transformationVector?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TextBlock
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTextBlockLength',
        tsPropertyName: 'textBlockLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTextBlockText',
        tsPropertyName: 'textBlockText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTextBlockOffset',
        tsPropertyName: 'textBlockOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTransformationVector',
        tsPropertyName: 'transformationVector',
        type: 'string',
        required: false
      }
    ];
  }


}
