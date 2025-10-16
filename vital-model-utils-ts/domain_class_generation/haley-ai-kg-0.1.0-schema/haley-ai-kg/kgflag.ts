import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFlag
 */
export class KGFlag extends KGNode {
  public readonly kGFlagSourceURI?: string;
  public readonly kGFlagDescription?: string;
  public readonly kGFlagReasonURI?: string;
  public readonly kGFlagType?: string;
  public readonly kGFlagDateTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGFlag
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagSourceURI',
        tsPropertyName: 'kGFlagSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagDescription',
        tsPropertyName: 'kGFlagDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagReasonURI',
        tsPropertyName: 'kGFlagReasonURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagType',
        tsPropertyName: 'kGFlagType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFlagDateTime',
        tsPropertyName: 'kGFlagDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
