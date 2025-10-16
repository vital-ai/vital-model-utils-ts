import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Translation
 */
export class Translation extends Card {
  public readonly sourceText?: string;
  public readonly sourcePronounciation?: string;
  public readonly sourceLanguage?: string;
  public readonly targetText?: string;
  public readonly targetPronounciation?: string;
  public readonly targetLanguage?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Translation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceText',
        tsPropertyName: 'sourceText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourcePronounciation',
        tsPropertyName: 'sourcePronounciation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceLanguage',
        tsPropertyName: 'sourceLanguage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetText',
        tsPropertyName: 'targetText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetPronounciation',
        tsPropertyName: 'targetPronounciation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetLanguage',
        tsPropertyName: 'targetLanguage',
        type: 'string',
        required: false
      }
    ];
  }


}
