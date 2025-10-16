import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasRow
 */
export class Edge_hasRow extends VITAL_PeerEdge {
  public readonly highlighted?: boolean;
  public readonly suppressedRow?: boolean;
  public readonly maximumRowCount?: number;
  public readonly minimumRowCount?: number;
  public readonly requiredRow?: boolean;
  public readonly questionIndex?: number;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasRow
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressedRow',
        tsPropertyName: 'suppressedRow',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMaximumRowCount',
        tsPropertyName: 'maximumRowCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMinimumRowCount',
        tsPropertyName: 'minimumRowCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRequiredRow',
        tsPropertyName: 'requiredRow',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionIndex',
        tsPropertyName: 'questionIndex',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasRow
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasRow';
  }
}
