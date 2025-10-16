import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion
 */
export class Edge_hasQuestion extends VITAL_PeerEdge {
  public readonly highlighted?: boolean;
  public readonly suppressedQuestion?: boolean;
  public readonly haleyAnswerConstraintScopeType?: string;
  public readonly questionIndex?: number;
  public readonly requiredQuestion?: boolean;
  public readonly dynamicRequiredQuestion?: boolean;
  public readonly haleyAnswerValidationScopeType?: string;
  public readonly pageNumber?: number;
  public readonly rank?: number;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHighlighted',
        tsPropertyName: 'highlighted',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressedQuestion',
        tsPropertyName: 'suppressedQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintScopeType',
        tsPropertyName: 'haleyAnswerConstraintScopeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionIndex',
        tsPropertyName: 'questionIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRequiredQuestion',
        tsPropertyName: 'requiredQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDynamicRequiredQuestion',
        tsPropertyName: 'dynamicRequiredQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerValidationScopeType',
        tsPropertyName: 'haleyAnswerValidationScopeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPageNumber',
        tsPropertyName: 'pageNumber',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRank',
        tsPropertyName: 'rank',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasQuestion
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasQuestion';
  }
}
