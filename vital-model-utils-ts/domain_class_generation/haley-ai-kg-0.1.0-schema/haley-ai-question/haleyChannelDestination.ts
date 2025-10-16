import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyChannelDestination
 */
export class HaleyChannelDestination extends VITAL_Node {
  public readonly channelDestinationChannelName?: string;
  public readonly channelDestinationBotName?: string;
  public readonly haleyChannelTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyChannelDestination
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChannelDestinationChannelName',
        tsPropertyName: 'channelDestinationChannelName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChannelDestinationBotName',
        tsPropertyName: 'channelDestinationBotName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyChannelTypeURI',
        tsPropertyName: 'haleyChannelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
