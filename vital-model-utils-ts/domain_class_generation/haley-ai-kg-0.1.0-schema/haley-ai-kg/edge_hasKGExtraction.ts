import { Edge_hasKGEdge } from './edge_hasKGEdge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction
 */
export class Edge_hasKGExtraction extends Edge_hasKGEdge {
  public readonly kGStartTokenIndex?: number;
  public readonly kGEndByteIndex?: number;
  public readonly kGExtractTaskURI?: string;
  public readonly kGEndTokenIndex?: number;
  public readonly kGStartByteIndex?: number;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasKGExtraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStartTokenIndex',
        tsPropertyName: 'kGStartTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEndByteIndex',
        tsPropertyName: 'kGEndByteIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExtractTaskURI',
        tsPropertyName: 'kGExtractTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEndTokenIndex',
        tsPropertyName: 'kGEndTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStartByteIndex',
        tsPropertyName: 'kGStartByteIndex',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGExtraction
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction';
  }
}
