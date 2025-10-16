import { CommandMessage } from './commandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MetaQLMessage
 */
export class MetaQLMessage extends CommandMessage {
  public readonly queryString?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for MetaQLMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasQueryString',
        tsPropertyName: 'queryString',
        type: 'string',
        required: false
      }
    ];
  }


}
