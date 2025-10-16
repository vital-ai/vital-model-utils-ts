import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult
 */
export class HaleyAggregationResult extends VITAL_Node {
  public readonly aggregationType?: string;
  public readonly aggregationDoubleValue?: number;
  public readonly aggregationIntegerValue?: number;
  public readonly aggregationName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAggregationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationType',
        tsPropertyName: 'aggregationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationDoubleValue',
        tsPropertyName: 'aggregationDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationIntegerValue',
        tsPropertyName: 'aggregationIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationName',
        tsPropertyName: 'aggregationName',
        type: 'string',
        required: false
      }
    ];
  }


}
