import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudAppLimits
 */
export class CloudAppLimits extends HaleyCloud {
  public readonly dailyCostLimit?: number;
  public readonly dailyRequestGenerationLimit?: number;
  public readonly dailyRequestLimit?: number;
  public readonly dailyRequestInputLimit?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudAppLimits
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyCostLimit',
        tsPropertyName: 'dailyCostLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestGenerationLimit',
        tsPropertyName: 'dailyRequestGenerationLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestLimit',
        tsPropertyName: 'dailyRequestLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestInputLimit',
        tsPropertyName: 'dailyRequestInputLimit',
        type: 'number',
        required: false
      }
    ];
  }


}
