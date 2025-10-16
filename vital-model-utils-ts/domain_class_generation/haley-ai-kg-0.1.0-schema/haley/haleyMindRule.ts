import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRule
 */
export class HaleyMindRule extends VITAL_Node {
  public readonly ruleMethod?: string;
  public readonly graphResolveTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMethod',
        tsPropertyName: 'ruleMethod',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasGraphResolveTypeURI',
        tsPropertyName: 'graphResolveTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
