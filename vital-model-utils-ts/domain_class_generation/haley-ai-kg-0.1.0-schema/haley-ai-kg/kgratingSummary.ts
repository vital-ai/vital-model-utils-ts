import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRatingSummary
 */
export class KGRatingSummary extends KGNode {
  public readonly kGRatingSummaryTotalCount?: number;
  public readonly kGRatingSummaryReviewCount?: number;
  public readonly kGRatingSummaryNegativeCount?: number;
  public readonly kGRatingCalculationDateTime?: string | Date;
  public readonly kGRatingSummaryAverageRatingDouble?: number;
  public readonly kGRatingSummaryAverageStarRating?: number;
  public readonly kGRatingValueTypeURI?: string;
  public readonly kGRatingSummaryTitle?: string;
  public readonly kGRatingSummaryType?: string;
  public readonly kGRatingSummaryNeutralCount?: number;
  public readonly kGRatingSummaryPositiveCount?: number;
  public readonly kGRatingSummaryText?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRatingSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTotalCount',
        tsPropertyName: 'kGRatingSummaryTotalCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryReviewCount',
        tsPropertyName: 'kGRatingSummaryReviewCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNegativeCount',
        tsPropertyName: 'kGRatingSummaryNegativeCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingCalculationDateTime',
        tsPropertyName: 'kGRatingCalculationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageRatingDouble',
        tsPropertyName: 'kGRatingSummaryAverageRatingDouble',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageStarRating',
        tsPropertyName: 'kGRatingSummaryAverageStarRating',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTitle',
        tsPropertyName: 'kGRatingSummaryTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryType',
        tsPropertyName: 'kGRatingSummaryType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNeutralCount',
        tsPropertyName: 'kGRatingSummaryNeutralCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryPositiveCount',
        tsPropertyName: 'kGRatingSummaryPositiveCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryText',
        tsPropertyName: 'kGRatingSummaryText',
        type: 'string',
        required: false
      }
    ];
  }


}
