import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EndpointProfile
 */
export class EndpointProfile extends VITAL_Node {
  public readonly locale?: string;
  public readonly premium?: boolean;
  public readonly authLoginProfile?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for EndpointProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocale',
        tsPropertyName: 'locale',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPremium',
        tsPropertyName: 'premium',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAuthLoginProfile',
        tsPropertyName: 'authLoginProfile',
        type: 'boolean',
        required: false
      }
    ];
  }


}
