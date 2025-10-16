import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSegment
 */
export class KGSegment extends VITAL_Node {
  public readonly vitalSegmentURI?: string;
  public readonly vitalSegmentID?: string;
  public readonly kGSegmentGraphURI?: string;
  public readonly kGSegmentTypeURI?: string;
  public readonly kGSegmentAccessTypeURI?: string;
  public readonly kGSegmentAccessAccountURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGSegment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasVitalSegmentURI',
        tsPropertyName: 'vitalSegmentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasVitalSegmentID',
        tsPropertyName: 'vitalSegmentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentGraphURI',
        tsPropertyName: 'kGSegmentGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentTypeURI',
        tsPropertyName: 'kGSegmentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentAccessTypeURI',
        tsPropertyName: 'kGSegmentAccessTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSegmentAccessAccountURI',
        tsPropertyName: 'kGSegmentAccessAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
