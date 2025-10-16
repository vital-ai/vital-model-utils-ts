import { Document } from '../vital-nlp/document.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ReviewSummary
 */
export class ReviewSummary extends Document {
  public readonly totalReviews?: number;
  public readonly averageRating?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ReviewSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalReviews',
        tsPropertyName: 'totalReviews',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAverageRating',
        tsPropertyName: 'averageRating',
        type: 'number',
        required: false
      }
    ];
  }


}
