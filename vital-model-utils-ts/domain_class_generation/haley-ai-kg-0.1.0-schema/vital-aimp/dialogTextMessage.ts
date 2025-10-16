import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogTextMessage
 */
export class DialogTextMessage extends DialogAction {
  public readonly internalOnly?: boolean;
  public readonly otherChannelTarget?: boolean;
  public readonly text?: string;
  public readonly broadcastOnly?: boolean;
  public readonly currentChannelTarget?: boolean;
  public readonly sendAsUser?: boolean;
  public readonly textToSpeak?: string;
  public readonly targetChannel?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isOtherChannelTarget',
        tsPropertyName: 'otherChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget',
        tsPropertyName: 'currentChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsUser',
        tsPropertyName: 'sendAsUser',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetChannel',
        tsPropertyName: 'targetChannel',
        type: 'string',
        required: false
      }
    ];
  }


}
