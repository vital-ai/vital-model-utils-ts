import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudAppActivity
 */
export class CloudAppActivity extends HaleyCloud {
  public readonly dailyCostAmount?: number;
  public readonly dailyRequestInputCount?: number;
  public readonly dailyRequestCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudAppActivity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyCostAmount',
        tsPropertyName: 'dailyCostAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestInputCount',
        tsPropertyName: 'dailyRequestInputCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestCount',
        tsPropertyName: 'dailyRequestCount',
        type: 'number',
        required: false
      }
    ];
  }


}
