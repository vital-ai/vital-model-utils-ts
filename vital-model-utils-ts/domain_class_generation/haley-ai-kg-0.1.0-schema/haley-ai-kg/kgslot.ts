import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSlot
 */
export class KGSlot extends KGNode {
  public readonly kGBeliefModeType?: string;
  public readonly kGSlotTypeDescription?: string;
  public readonly kGExpressionType?: string;
  public readonly kGSlotValueType?: string;
  public readonly kGSlotType?: string;
  public readonly slotSequence?: number;
  public readonly kGParticipationType?: string;
  public readonly kGSlotConstraintType?: string;
  public readonly kGSlotReferenceURI?: string;
  public readonly frameGraphURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType',
        tsPropertyName: 'kGBeliefModeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeDescription',
        tsPropertyName: 'kGSlotTypeDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType',
        tsPropertyName: 'kGExpressionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotValueType',
        tsPropertyName: 'kGSlotValueType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotType',
        tsPropertyName: 'kGSlotType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasSlotSequence',
        tsPropertyName: 'slotSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGParticipationType',
        tsPropertyName: 'kGParticipationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotConstraintType',
        tsPropertyName: 'kGSlotConstraintType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotReferenceURI',
        tsPropertyName: 'kGSlotReferenceURI',
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
