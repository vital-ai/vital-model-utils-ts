import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRating
 */
export class KGRating extends KGNode {
  public readonly kGRatingDateTime?: string | Date;
  public readonly kGRatingValueURI?: string;
  public readonly kGRatingStarValue?: number;
  public readonly kGRatingValueDouble?: number;
  public readonly kGRatingValueTypeURI?: string;
  public readonly kGRatingType?: string;
  public readonly kGRatingSourceURI?: string;
  public readonly kGRatingDescription?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRating
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingDateTime',
        tsPropertyName: 'kGRatingDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueURI',
        tsPropertyName: 'kGRatingValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingStarValue',
        tsPropertyName: 'kGRatingStarValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueDouble',
        tsPropertyName: 'kGRatingValueDouble',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueTypeURI',
        tsPropertyName: 'kGRatingValueTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingType',
        tsPropertyName: 'kGRatingType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSourceURI',
        tsPropertyName: 'kGRatingSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingDescription',
        tsPropertyName: 'kGRatingDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
