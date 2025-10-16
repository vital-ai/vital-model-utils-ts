import { AIMPMessage } from '../vital-aimp/aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#PermitStreamingRequestMessage
 */
export class PermitStreamingRequestMessage extends AIMPMessage {
  public readonly permitStreamingRequestURI?: string;
  public readonly permitStreamingAgentInstallURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for PermitStreamingRequestMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPermitStreamingRequestURI',
        tsPropertyName: 'permitStreamingRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPermitStreamingAgentInstallURI',
        tsPropertyName: 'permitStreamingAgentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
