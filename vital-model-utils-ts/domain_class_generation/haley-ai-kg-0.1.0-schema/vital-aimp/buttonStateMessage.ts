import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ButtonStateMessage
 */
export class ButtonStateMessage extends AIMPMessage {
  public readonly submitButtonLabel?: string;
  public readonly submitButtonEnabled?: boolean;
  public readonly nextButtonLabel?: string;
  public readonly previousButtonEnabled?: boolean;
  public readonly previousButtonLabel?: string;
  public readonly nextButtonEnabled?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ButtonStateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubmitButtonLabel',
        tsPropertyName: 'submitButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSubmitButtonEnabled',
        tsPropertyName: 'submitButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNextButtonLabel',
        tsPropertyName: 'nextButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPreviousButtonEnabled',
        tsPropertyName: 'previousButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousButtonLabel',
        tsPropertyName: 'previousButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isNextButtonEnabled',
        tsPropertyName: 'nextButtonEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
