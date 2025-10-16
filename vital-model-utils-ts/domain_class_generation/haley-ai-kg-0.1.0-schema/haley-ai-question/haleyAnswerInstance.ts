import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance
 */
export class HaleyAnswerInstance extends VITAL_Node {
  public readonly secondarySource?: boolean;
  public readonly haleyAnswerInstanceDependencyStatus?: string;
  public readonly haleyAnswer?: string;
  public readonly haleyAnswerType?: string;
  public readonly instanceOriginLoginURI?: string;
  public readonly fallbackAnswerValue?: string;
  public readonly readOnlyAnswerValue?: boolean;
  public readonly haleyMappedAnswerInstance?: string;
  public readonly instanceOriginTimestamp?: string | Date;
  public readonly fallbackAnswerValueEncoding?: string;
  public readonly instanceOriginAccount?: string;
  /** URI reference to one of: HaleyRowInstance, HaleyQuestionInstance, HaleyGroupInstance, HaleySectionInstance, HaleyAnswerInstance */
  public readonly provenanceInstanceURI?: http://vital.ai/ontology/haley-ai-question#HaleyRowInstance | http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance | http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance | http://vital.ai/ontology/haley-ai-question#HaleySectionInstance | http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance;
  public readonly instanceOriginSessionID?: string;
  public readonly haleyAnswerFollowupType?: string;
  public readonly activeInstance?: boolean;
  public readonly suppressEmptyAnswerValues?: boolean;
  public readonly answerValue?: string;
  public readonly answerInstanceInteractionTypeURI?: string;
  public readonly haleyAnswerConstantURI?: string;
  public readonly haleyBeliefModeURI?: string;
  public readonly enhancementRuleSourceURI?: string;
  public readonly instanceTimestamp?: string | Date;
  public readonly haleyAnswerInstanceDerivationTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSecondarySource',
        tsPropertyName: 'secondarySource',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDependencyStatus',
        tsPropertyName: 'haleyAnswerInstanceDependencyStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswer',
        tsPropertyName: 'haleyAnswer',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType',
        tsPropertyName: 'haleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI',
        tsPropertyName: 'instanceOriginLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValue',
        tsPropertyName: 'fallbackAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue',
        tsPropertyName: 'readOnlyAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerInstance',
        tsPropertyName: 'haleyMappedAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp',
        tsPropertyName: 'instanceOriginTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValueEncoding',
        tsPropertyName: 'fallbackAnswerValueEncoding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount',
        tsPropertyName: 'instanceOriginAccount',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI',
        tsPropertyName: 'provenanceInstanceURI',
        type: 'http://vital.ai/ontology/haley-ai-question#HaleyRowInstance | http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance | http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance | http://vital.ai/ontology/haley-ai-question#HaleySectionInstance | http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID',
        tsPropertyName: 'instanceOriginSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerFollowupType',
        tsPropertyName: 'haleyAnswerFollowupType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveInstance',
        tsPropertyName: 'activeInstance',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues',
        tsPropertyName: 'suppressEmptyAnswerValues',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerValue',
        tsPropertyName: 'answerValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceInteractionTypeURI',
        tsPropertyName: 'answerInstanceInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI',
        tsPropertyName: 'haleyAnswerConstantURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyBeliefModeURI',
        tsPropertyName: 'haleyBeliefModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleSourceURI',
        tsPropertyName: 'enhancementRuleSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp',
        tsPropertyName: 'instanceTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDerivationTypeURI',
        tsPropertyName: 'haleyAnswerInstanceDerivationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
