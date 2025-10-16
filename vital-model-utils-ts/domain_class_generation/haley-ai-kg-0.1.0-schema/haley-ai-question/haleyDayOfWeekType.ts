import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDayOfWeekType
 */
export class HaleyDayOfWeekType extends VITAL_Node {
  public readonly weekendDay?: boolean;
  public readonly dayOfWeekOrder?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDayOfWeekType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isWeekendDay',
        tsPropertyName: 'weekendDay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDayOfWeekOrder',
        tsPropertyName: 'dayOfWeekOrder',
        type: 'number',
        required: false
      }
    ];
  }


}
