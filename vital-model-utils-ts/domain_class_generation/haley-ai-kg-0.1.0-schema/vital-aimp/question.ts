import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Question
 */
export class Question extends DialogAction {
  public readonly dialogToCallName?: string;
  public readonly shortDescription?: string;
  public readonly text?: string;
  public readonly prefilledAnswer?: string;
  public readonly questionType?: string;
  public readonly handlerEnabled?: boolean;
  public readonly placeholder?: string;
  public readonly questionOption?: string;
  public readonly dialogToCallScope?: string;
  public readonly textToSpeak?: string;
  public readonly previousAnswer?: string;
  public readonly questionContent?: string;
  public readonly index?: number;
  public readonly chatRulesOutputChannelFactName?: string;
  public readonly hidden?: boolean;
  public readonly conditionalLogic?: string;
  public readonly ignoreStandardIntents?: boolean;
  public readonly questionDataJSON?: string;
  public readonly targetChannel?: string;
  public readonly processWithChatRules?: boolean;
  public readonly constraints?: string;
  public readonly propertyName?: string;
  public readonly internalAnswerProcessingEnabled?: boolean;
  public readonly questionSubType?: string;
  public readonly maxRetriesCount?: number;
  public readonly description?: string;
  public readonly propertyType?: string;
  public readonly interruptedFactName?: string;
  public readonly readOnlyQuestion?: boolean;
  public readonly requestType?: string;
  public readonly currentChannelTarget?: boolean;
  public readonly sameAsCheckBoxLabel?: string;
  public readonly chatRulesOutputFactName?: string;
  public readonly sendAsUser?: boolean;
  public readonly handlerResultFactName?: string;
  public readonly scriptBody?: string;
  public readonly skippable?: boolean;
  public readonly internalProcessingChoice?: string;
  public readonly internalOnly?: boolean;
  public readonly textChannelFactName?: string;
  public readonly textFactName?: string;
  public readonly questionCountExcluded?: boolean;
  public readonly otherChannelTarget?: boolean;
  public readonly broadcastOnly?: boolean;
  public readonly questionPreviousContent?: string;
  public readonly columnsDefinition?: string;
  public readonly sameAsCheckboxEnabled?: boolean;
  public readonly sectionHeaderHTML?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Question
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDialogToCallName',
        tsPropertyName: 'dialogToCallName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPrefilledAnswer',
        tsPropertyName: 'prefilledAnswer',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionType',
        tsPropertyName: 'questionType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHandlerEnabled',
        tsPropertyName: 'handlerEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPlaceholder',
        tsPropertyName: 'placeholder',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionOption',
        tsPropertyName: 'questionOption',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDialogToCallScope',
        tsPropertyName: 'dialogToCallScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousAnswer',
        tsPropertyName: 'previousAnswer',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionContent',
        tsPropertyName: 'questionContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRulesOutputChannelFactName',
        tsPropertyName: 'chatRulesOutputChannelFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHidden',
        tsPropertyName: 'hidden',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionalLogic',
        tsPropertyName: 'conditionalLogic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIgnoreStandardIntents',
        tsPropertyName: 'ignoreStandardIntents',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionDataJSON',
        tsPropertyName: 'questionDataJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetChannel',
        tsPropertyName: 'targetChannel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isProcessWithChatRules',
        tsPropertyName: 'processWithChatRules',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConstraints',
        tsPropertyName: 'constraints',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalAnswerProcessingEnabled',
        tsPropertyName: 'internalAnswerProcessingEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionSubType',
        tsPropertyName: 'questionSubType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMaxRetriesCount',
        tsPropertyName: 'maxRetriesCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyType',
        tsPropertyName: 'propertyType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInterruptedFactName',
        tsPropertyName: 'interruptedFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isReadOnlyQuestion',
        tsPropertyName: 'readOnlyQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestType',
        tsPropertyName: 'requestType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget',
        tsPropertyName: 'currentChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSameAsCheckBoxLabel',
        tsPropertyName: 'sameAsCheckBoxLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRulesOutputFactName',
        tsPropertyName: 'chatRulesOutputFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsUser',
        tsPropertyName: 'sendAsUser',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasHandlerResultFactName',
        tsPropertyName: 'handlerResultFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScriptBody',
        tsPropertyName: 'scriptBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSkippable',
        tsPropertyName: 'skippable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInternalProcessingChoice',
        tsPropertyName: 'internalProcessingChoice',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextChannelFactName',
        tsPropertyName: 'textChannelFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextFactName',
        tsPropertyName: 'textFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountExcluded',
        tsPropertyName: 'questionCountExcluded',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionPreviousContent',
        tsPropertyName: 'questionPreviousContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasColumnsDefinition',
        tsPropertyName: 'columnsDefinition',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSameAsCheckboxEnabled',
        tsPropertyName: 'sameAsCheckboxEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSectionHeaderHTML',
        tsPropertyName: 'sectionHeaderHTML',
        type: 'string',
        required: false
      }
    ];
  }


}
