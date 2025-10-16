import { AnswerMessage } from './answerMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QuestionsPageNavigationMessage
 */
export class QuestionsPageNavigationMessage extends AnswerMessage {
  public readonly requestedPage?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for QuestionsPageNavigationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestedPage',
        tsPropertyName: 'requestedPage',
        type: 'string',
        required: false
      }
    ];
  }


}
