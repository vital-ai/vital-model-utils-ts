import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceSummary
 */
export class HaleyGroupInstanceSummary extends VITAL_Node {
  public readonly numberOfRequiredQuestions?: number;
  public readonly numberOfAnsweredPendingQuestions?: number;
  public readonly numberOfAnsweredQuestions?: number;
  public readonly numberOfQuestions?: number;
  public readonly numberOfAnsweredInvalidQuestions?: number;
  public readonly numberOfAnsweredRequiredQuestions?: number;
  public readonly numberOfPendingQuestions?: number;
  public readonly haleyGroupInstanceStatus?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGroupInstanceSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfRequiredQuestions',
        tsPropertyName: 'numberOfRequiredQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredPendingQuestions',
        tsPropertyName: 'numberOfAnsweredPendingQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredQuestions',
        tsPropertyName: 'numberOfAnsweredQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfQuestions',
        tsPropertyName: 'numberOfQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredInvalidQuestions',
        tsPropertyName: 'numberOfAnsweredInvalidQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfAnsweredRequiredQuestions',
        tsPropertyName: 'numberOfAnsweredRequiredQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasNumberOfPendingQuestions',
        tsPropertyName: 'numberOfPendingQuestions',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstanceStatus',
        tsPropertyName: 'haleyGroupInstanceStatus',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
