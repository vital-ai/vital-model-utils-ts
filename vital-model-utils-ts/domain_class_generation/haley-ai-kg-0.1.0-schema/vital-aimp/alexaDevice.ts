import { SmartDevice } from './smartDevice.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AlexaDevice
 */
export class AlexaDevice extends SmartDevice {
  public readonly alexaUserID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AlexaDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAlexaUserID',
        tsPropertyName: 'alexaUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
