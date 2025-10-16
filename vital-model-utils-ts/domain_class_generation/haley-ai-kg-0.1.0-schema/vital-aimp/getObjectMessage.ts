import { CommandMessage } from './commandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GetObjectMessage
 */
export class GetObjectMessage extends CommandMessage {
  public readonly includeDependentObjects?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for GetObjectMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIncludeDependentObjects',
        tsPropertyName: 'includeDependentObjects',
        type: 'boolean',
        required: false
      }
    ];
  }


}
