import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#CampaignAction
 */
export class CampaignAction extends VITAL_Node {
  public readonly actionStatus?: string;
  public readonly minutesBetweenTweets?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CampaignAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasActionStatus',
        tsPropertyName: 'actionStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasMinutesBetweenTweets',
        tsPropertyName: 'minutesBetweenTweets',
        type: 'number',
        required: false
      }
    ];
  }


}
