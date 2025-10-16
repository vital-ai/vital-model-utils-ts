import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Annotation
 */
export class Annotation extends VITAL_Node {
  public readonly annotationValue?: string;
  public readonly annotationName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Annotation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnnotationValue',
        tsPropertyName: 'annotationValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnnotationName',
        tsPropertyName: 'annotationName',
        type: 'string',
        required: false
      }
    ];
  }


}
