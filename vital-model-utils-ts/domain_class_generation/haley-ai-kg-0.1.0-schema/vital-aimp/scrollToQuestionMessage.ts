import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ScrollToQuestionMessage
 */
export class ScrollToQuestionMessage extends AIMPMessage {
  public readonly scrollToQuestionIndex?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ScrollToQuestionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScrollToQuestionIndex',
        tsPropertyName: 'scrollToQuestionIndex',
        type: 'number',
        required: false
      }
    ];
  }


}
