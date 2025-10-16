import { Endpoint } from './endpoint.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookEndpoint
 */
export class FacebookEndpoint extends Endpoint {
  public readonly entryText?: string;
  public readonly gettingStartedText?: string;
  public readonly getStartedButtonEnabled?: boolean;
  public readonly greetingText?: string;
  public readonly persistedMenuJSON?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FacebookEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntryText',
        tsPropertyName: 'entryText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGettingStartedText',
        tsPropertyName: 'gettingStartedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGetStartedButtonEnabled',
        tsPropertyName: 'getStartedButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGreetingText',
        tsPropertyName: 'greetingText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPersistedMenuJSON',
        tsPropertyName: 'persistedMenuJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
