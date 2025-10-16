import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMonthOfYearType
 */
export class HaleyMonthOfYearType extends VITAL_Node {
  public readonly monthOfYearOrder?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMonthOfYearType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMonthOfYearOrder',
        tsPropertyName: 'monthOfYearOrder',
        type: 'number',
        required: false
      }
    ];
  }


}
