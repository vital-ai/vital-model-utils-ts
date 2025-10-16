import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindMetaQLDataset
 */
export class HaleyMindMetaQLDataset extends VITAL_Node {
  public readonly ruleMetaQLObjectCount?: number;
  public readonly ruleMetaQLParameterMap?: string;
  public readonly ruleMetaQLQueryName?: string;
  public readonly ruleMetaQLTimestamp?: string | Date;
  public readonly ruleInvocationURI?: string;
  public readonly ruleURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindMetaQLDataset
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLObjectCount',
        tsPropertyName: 'ruleMetaQLObjectCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLParameterMap',
        tsPropertyName: 'ruleMetaQLParameterMap',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLQueryName',
        tsPropertyName: 'ruleMetaQLQueryName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLTimestamp',
        tsPropertyName: 'ruleMetaQLTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleInvocationURI',
        tsPropertyName: 'ruleInvocationURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleURI',
        tsPropertyName: 'ruleURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
