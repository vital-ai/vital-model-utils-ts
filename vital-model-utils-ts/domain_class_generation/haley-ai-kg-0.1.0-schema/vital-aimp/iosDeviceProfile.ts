import { EndpointProfile } from './endpointProfile.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#IosDeviceProfile
 */
export class IosDeviceProfile extends EndpointProfile {
  public readonly notificationsEnabled?: boolean;
  public readonly token?: string;
  public readonly uuid?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for IosDeviceProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isNotificationsEnabled',
        tsPropertyName: 'notificationsEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasToken',
        tsPropertyName: 'token',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUuid',
        tsPropertyName: 'uuid',
        type: 'string',
        required: false
      }
    ];
  }


}
