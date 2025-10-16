import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GetObjectResultsMessage
 */
export class GetObjectResultsMessage extends AIMPMessage {
  public readonly includeDependentObjects?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for GetObjectResultsMessage
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
