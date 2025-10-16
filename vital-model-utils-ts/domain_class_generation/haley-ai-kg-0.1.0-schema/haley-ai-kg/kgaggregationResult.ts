import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAggregationResult
 */
export class KGAggregationResult extends VITAL_Node {
  public readonly kGAggregationDoubleValue?: number;
  public readonly kGAggregationTypeURI?: string;
  public readonly kGAggregationIntegerValue?: number;
  public readonly kGAggregationName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAggregationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationDoubleValue',
        tsPropertyName: 'kGAggregationDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationTypeURI',
        tsPropertyName: 'kGAggregationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationIntegerValue',
        tsPropertyName: 'kGAggregationIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationName',
        tsPropertyName: 'kGAggregationName',
        type: 'string',
        required: false
      }
    ];
  }


}
