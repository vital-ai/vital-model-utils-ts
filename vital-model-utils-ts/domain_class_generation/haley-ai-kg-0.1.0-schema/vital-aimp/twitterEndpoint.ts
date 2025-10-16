import { Endpoint } from './endpoint.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TwitterEndpoint
 */
export class TwitterEndpoint extends Endpoint {
  public readonly oAuthToken?: string;
  public readonly oAuthSecret?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TwitterEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOAuthToken',
        tsPropertyName: 'oAuthToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOAuthSecret',
        tsPropertyName: 'oAuthSecret',
        type: 'string',
        required: false
      }
    ];
  }


}
