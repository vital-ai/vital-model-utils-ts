import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QuestionsPageMessage
 */
export class QuestionsPageMessage extends AIMPMessage {
  public readonly status?: string;
  public readonly scrollToQuestionIndex?: number;
  public readonly totalPages?: number;
  public readonly nextButtonEnabled?: boolean;
  public readonly nextButtonLabel?: string;
  public readonly multiChoiceQuestionInstruction?: string;
  public readonly questionsPageThemeURI?: string;
  public readonly staticQuestionsList?: boolean;
  public readonly previousButtonEnabled?: boolean;
  public readonly goodbyePage?: boolean;
  public readonly previousButtonLabel?: string;
  public readonly submitButtonLabel?: string;
  public readonly hidePageCount?: boolean;
  public readonly submitButtonEnabled?: boolean;
  public readonly saveAnswersOnGoingBack?: boolean;
  public readonly page?: number;
  public readonly questionCountPanelDisabled?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for QuestionsPageMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScrollToQuestionIndex',
        tsPropertyName: 'scrollToQuestionIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalPages',
        tsPropertyName: 'totalPages',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isNextButtonEnabled',
        tsPropertyName: 'nextButtonEnabled',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMultiChoiceQuestionInstruction',
        tsPropertyName: 'multiChoiceQuestionInstruction',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionsPageThemeURI',
        tsPropertyName: 'questionsPageThemeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isStaticQuestionsList',
        tsPropertyName: 'staticQuestionsList',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPreviousButtonEnabled',
        tsPropertyName: 'previousButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGoodbyePage',
        tsPropertyName: 'goodbyePage',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubmitButtonLabel',
        tsPropertyName: 'submitButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHidePageCount',
        tsPropertyName: 'hidePageCount',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSubmitButtonEnabled',
        tsPropertyName: 'submitButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSaveAnswersOnGoingBack',
        tsPropertyName: 'saveAnswersOnGoingBack',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPage',
        tsPropertyName: 'page',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountPanelDisabled',
        tsPropertyName: 'questionCountPanelDisabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
