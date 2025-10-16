import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PermittedSender
 */
export class PermittedSender extends VITAL_Node {
  public readonly email?: string;
  public readonly permittedSenderTypeURI?: string;
  public readonly permittedSenderStatusURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for PermittedSender
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEmail',
        tsPropertyName: 'email',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPermittedSenderTypeURI',
        tsPropertyName: 'permittedSenderTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPermittedSenderStatusURI',
        tsPropertyName: 'permittedSenderStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
