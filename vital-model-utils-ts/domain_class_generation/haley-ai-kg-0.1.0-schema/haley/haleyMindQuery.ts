import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindQuery
 */
export class HaleyMindQuery extends VITAL_Node {
  public readonly haleyMindQueryParameters?: string;
  public readonly haleyMindQueryStatusURI?: string;
  public readonly haleyMindInferenceQuery?: string;
  public readonly haleyMindQueryModule?: string;
  public readonly haleyMindQueryErrorCode?: number;
  public readonly queryToRuleURI?: string;
  public readonly haleyMindAppURI?: string;
  public readonly haleyMindQueryErrorMessage?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryParameters',
        tsPropertyName: 'haleyMindQueryParameters',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryStatusURI',
        tsPropertyName: 'haleyMindQueryStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindInferenceQuery',
        tsPropertyName: 'haleyMindInferenceQuery',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryModule',
        tsPropertyName: 'haleyMindQueryModule',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryErrorCode',
        tsPropertyName: 'haleyMindQueryErrorCode',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasQueryToRuleURI',
        tsPropertyName: 'queryToRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAppURI',
        tsPropertyName: 'haleyMindAppURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindQueryErrorMessage',
        tsPropertyName: 'haleyMindQueryErrorMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
