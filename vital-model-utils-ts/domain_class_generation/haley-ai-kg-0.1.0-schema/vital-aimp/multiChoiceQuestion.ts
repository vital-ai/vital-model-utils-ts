import { Question } from './question.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MultiChoiceQuestion
 */
export class MultiChoiceQuestion extends Question {
  public readonly submitButtonLabel?: string;
  public readonly renderQuickReplies?: boolean;
  public readonly inputFactScope?: string;
  public readonly choiceListSource?: string;
  public readonly multivalue?: boolean;
  public readonly inputPropertyName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for MultiChoiceQuestion
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRenderQuickReplies',
        tsPropertyName: 'renderQuickReplies',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputFactScope',
        tsPropertyName: 'inputFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChoiceListSource',
        tsPropertyName: 'choiceListSource',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMultivalue',
        tsPropertyName: 'multivalue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputPropertyName',
        tsPropertyName: 'inputPropertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
