import { Question } from './question.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TrueFalseQuestion
 */
export class TrueFalseQuestion extends Question {
  public readonly renderQuickReplies?: boolean;
  public readonly inputFactScope?: string;
  public readonly choiceListSource?: string;
  public readonly trueLabel?: string;
  public readonly falseLabel?: string;
  public readonly trueAnswerOnly?: boolean;
  public readonly inputPropertyName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TrueFalseQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTrueLabel',
        tsPropertyName: 'trueLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFalseLabel',
        tsPropertyName: 'falseLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTrueAnswerOnly',
        tsPropertyName: 'trueAnswerOnly',
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
