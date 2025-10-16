import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNode
 */
export class KGNode extends VITAL_Node {
  public readonly kGIndexDateTime?: string | Date;
  public readonly kGGraphAssertionDateTime?: string | Date;
  public readonly kGValidTypeURI?: string;
  public readonly kGRefURI?: string;
  public readonly kGDataHash?: string;
  public readonly kGTenantIdentifier?: string;
  public readonly kGraphDescription?: string;
  public readonly kGActionTypeList?: string;
  public readonly kGReferentURI?: string;
  public readonly kGChatInteractionGraphURI?: string;
  public readonly kGActionTypeSummaryDateTime?: string | Date;
  public readonly kGJSON?: string;
  public readonly kGIdentifier?: string;
  public readonly kGIndexStatusURI?: string;
  public readonly kGModelVersion?: string;
  public readonly kGNodeCacheDateTime?: string | Date;
  public readonly kGVisualStyleJSON?: string;
  public readonly kGVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI',
        tsPropertyName: 'kGValidTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRefURI',
        tsPropertyName: 'kGRefURI',
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription',
        tsPropertyName: 'kGraphDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeList',
        tsPropertyName: 'kGActionTypeList',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGReferentURI',
        tsPropertyName: 'kGReferentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionGraphURI',
        tsPropertyName: 'kGChatInteractionGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeSummaryDateTime',
        tsPropertyName: 'kGActionTypeSummaryDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNodeCacheDateTime',
        tsPropertyName: 'kGNodeCacheDateTime',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVersion',
        tsPropertyName: 'kGVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
