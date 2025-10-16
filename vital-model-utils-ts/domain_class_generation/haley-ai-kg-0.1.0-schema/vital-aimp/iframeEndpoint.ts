import { Endpoint } from './endpoint.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#IFrameEndpoint
 */
export class IFrameEndpoint extends Endpoint {
  public readonly customerServiceEnabled?: boolean;
  public readonly openInitially?: boolean;
  public readonly color?: string;
  public readonly greetingText?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for IFrameEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCustomerServiceEnabled',
        tsPropertyName: 'customerServiceEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isOpenInitially',
        tsPropertyName: 'openInitially',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasColor',
        tsPropertyName: 'color',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGreetingText',
        tsPropertyName: 'greetingText',
        type: 'string',
        required: false
      }
    ];
  }


}
