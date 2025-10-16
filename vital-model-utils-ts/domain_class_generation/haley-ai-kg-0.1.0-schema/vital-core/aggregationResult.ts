import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#AggregationResult
 */
export class AggregationResult extends VITAL_Node {
  public readonly value?: number;
  public readonly aggregationType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AggregationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasValue',
        tsPropertyName: 'value',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasAggregationType',
        tsPropertyName: 'aggregationType',
        type: 'string',
        required: false
      }
    ];
  }


}
