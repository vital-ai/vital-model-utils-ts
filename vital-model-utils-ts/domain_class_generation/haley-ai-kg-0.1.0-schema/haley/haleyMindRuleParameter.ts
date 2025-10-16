import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRuleParameter
 */
export class HaleyMindRuleParameter extends VITAL_Node {
  public readonly ruleParameterTypeURI?: string;
  public readonly ruleParameterModeURI?: string;
  public readonly ruleParameterIndex?: number;
  public readonly ruleParameterResolveObject?: boolean;
  public readonly ruleParameterName?: string;
  public readonly ruleParameterResolveObjectList?: boolean;
  public readonly ruleParameterResolveObjectGraph?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindRuleParameter
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterTypeURI',
        tsPropertyName: 'ruleParameterTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterModeURI',
        tsPropertyName: 'ruleParameterModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterIndex',
        tsPropertyName: 'ruleParameterIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterResolveObject',
        tsPropertyName: 'ruleParameterResolveObject',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterName',
        tsPropertyName: 'ruleParameterName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterResolveObjectList',
        tsPropertyName: 'ruleParameterResolveObjectList',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleParameterResolveObjectGraph',
        tsPropertyName: 'ruleParameterResolveObjectGraph',
        type: 'boolean',
        required: false
      }
    ];
  }


}
