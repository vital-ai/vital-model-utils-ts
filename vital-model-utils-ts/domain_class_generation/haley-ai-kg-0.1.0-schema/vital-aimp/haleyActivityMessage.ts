import { HaleyMessage } from './haleyMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyActivityMessage
 */
export class HaleyActivityMessage extends HaleyMessage {
  public readonly activityCanceled?: boolean;
  public readonly activityComplete?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyActivityMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityCanceled',
        tsPropertyName: 'activityCanceled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityComplete',
        tsPropertyName: 'activityComplete',
        type: 'boolean',
        required: false
      }
    ];
  }


}
