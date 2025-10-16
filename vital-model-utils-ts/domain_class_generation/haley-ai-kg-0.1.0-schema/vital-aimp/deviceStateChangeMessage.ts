import { DeviceMessage } from './deviceMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DeviceStateChangeMessage
 */
export class DeviceStateChangeMessage extends DeviceMessage {
  public readonly deviceNewState?: string;
  public readonly deviceOldState?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DeviceStateChangeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceNewState',
        tsPropertyName: 'deviceNewState',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceOldState',
        tsPropertyName: 'deviceOldState',
        type: 'string',
        required: false
      }
    ];
  }


}
