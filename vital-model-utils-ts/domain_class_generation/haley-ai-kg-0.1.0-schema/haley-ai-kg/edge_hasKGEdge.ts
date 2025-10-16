import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge
 */
export class Edge_hasKGEdge extends VITAL_PeerEdge {
  public readonly kGraphDescription?: string;
  public readonly kGIndexDateTime?: string | Date;
  public readonly kGGraphAssertionDateTime?: string | Date;
  public readonly kGVisualStyleJSON?: string;
  public readonly edgeName?: string;
  public readonly kGChatInteractionGraphURI?: string;
  public readonly kGJSON?: string;
  public readonly kGIdentifier?: string;
  public readonly kGIndexStatusURI?: string;
  public readonly kGModelVersion?: string;
  public readonly kGVersion?: string;
  public readonly kGRefEdgeURI?: string;
  public readonly kGValidTypeURI?: string;
  public readonly kGDataHash?: string;
  public readonly kGTenantIdentifier?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasKGEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription',
        tsPropertyName: 'kGraphDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDateTime',
        tsPropertyName: 'kGIndexDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGGraphAssertionDateTime',
        tsPropertyName: 'kGGraphAssertionDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVisualStyleJSON',
        tsPropertyName: 'kGVisualStyleJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasEdgeName',
        tsPropertyName: 'edgeName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionGraphURI',
        tsPropertyName: 'kGChatInteractionGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGJSON',
        tsPropertyName: 'kGJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifier',
        tsPropertyName: 'kGIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexStatusURI',
        tsPropertyName: 'kGIndexStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion',
        tsPropertyName: 'kGModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVersion',
        tsPropertyName: 'kGVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRefEdgeURI',
        tsPropertyName: 'kGRefEdgeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI',
        tsPropertyName: 'kGValidTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDataHash',
        tsPropertyName: 'kGDataHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier',
        tsPropertyName: 'kGTenantIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge';
  }
}
