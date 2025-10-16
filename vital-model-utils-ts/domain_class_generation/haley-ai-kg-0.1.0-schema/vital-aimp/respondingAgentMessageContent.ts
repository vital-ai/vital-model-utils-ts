import { AIMPMessageContent } from './aimpmessageContent.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RespondingAgentMessageContent
 */
export class RespondingAgentMessageContent extends AIMPMessageContent {
  public readonly messageAgentInstallURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for RespondingAgentMessageContent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageAgentInstallURI',
        tsPropertyName: 'messageAgentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
