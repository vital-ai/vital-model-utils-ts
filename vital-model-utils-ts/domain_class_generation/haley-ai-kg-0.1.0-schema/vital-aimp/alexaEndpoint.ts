import { Endpoint } from './endpoint.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AlexaEndpoint
 */
export class AlexaEndpoint extends Endpoint {
  public readonly alexaUserID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AlexaEndpoint
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
