import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFrame
 */
export class KGFrame extends KGNode {
  public readonly frameSequence?: number;
  public readonly kGFrameTypeDescription?: string;
  public readonly kGBeliefModeType?: string;
  public readonly parentFrameURI?: string;
  public readonly kGExpressionType?: string;
  public readonly kGFormType?: string;
  public readonly kGTypeMethodURI?: string;
  public readonly kGProvenanceType?: string;
  public readonly kGFrameType?: string;
  public readonly frameGraphURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGFrame
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFrameSequence',
        tsPropertyName: 'frameSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameTypeDescription',
        tsPropertyName: 'kGFrameTypeDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType',
        tsPropertyName: 'kGBeliefModeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasParentFrameURI',
        tsPropertyName: 'parentFrameURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType',
        tsPropertyName: 'kGExpressionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFormType',
        tsPropertyName: 'kGFormType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTypeMethodURI',
        tsPropertyName: 'kGTypeMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGProvenanceType',
        tsPropertyName: 'kGProvenanceType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameType',
        tsPropertyName: 'kGFrameType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI',
        tsPropertyName: 'frameGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
