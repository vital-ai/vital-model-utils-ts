import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ActivityCard
 */
export class ActivityCard extends Card {
  public readonly activityTaskIdentifier?: string;
  public readonly activitySpinnerEnabled?: boolean;
  public readonly activityItemJSON?: string;
  public readonly activityCanceled?: boolean;
  public readonly activityCancelEnabled?: boolean;
  public readonly activityComplete?: boolean;
  public readonly activityMessage?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ActivityCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityTaskIdentifier',
        tsPropertyName: 'activityTaskIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivitySpinnerEnabled',
        tsPropertyName: 'activitySpinnerEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityItemJSON',
        tsPropertyName: 'activityItemJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityCanceled',
        tsPropertyName: 'activityCanceled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityCancelEnabled',
        tsPropertyName: 'activityCancelEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityComplete',
        tsPropertyName: 'activityComplete',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityMessage',
        tsPropertyName: 'activityMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
