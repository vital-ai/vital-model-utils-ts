import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAnalyticsContainer
 */
export class HaleyAnalyticsContainer extends VITAL_Node {
  public readonly analyticsWindowSizeURI?: string;
  public readonly analyticsDataJSON?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnalyticsContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnalyticsWindowSizeURI',
        tsPropertyName: 'analyticsWindowSizeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnalyticsDataJSON',
        tsPropertyName: 'analyticsDataJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
