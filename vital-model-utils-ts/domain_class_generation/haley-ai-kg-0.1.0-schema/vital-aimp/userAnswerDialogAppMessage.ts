import { HaleyMessage } from './haleyMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage
 */
export class UserAnswerDialogAppMessage extends HaleyMessage {
  public readonly helpRequested?: boolean;
  public readonly questionClosed?: boolean;
  public readonly goBackSelected?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for UserAnswerDialogAppMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHelpRequested',
        tsPropertyName: 'helpRequested',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionClosed',
        tsPropertyName: 'questionClosed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGoBackSelected',
        tsPropertyName: 'goBackSelected',
        type: 'boolean',
        required: false
      }
    ];
  }


}
