import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#FlowPredictModel
 */
export class FlowPredictModel extends VITAL_Node {
  public readonly modelType?: string;
  public readonly modelPath?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FlowPredictModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasModelType',
        tsPropertyName: 'modelType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasModelPath',
        tsPropertyName: 'modelPath',
        type: 'string',
        required: false
      }
    ];
  }


}
