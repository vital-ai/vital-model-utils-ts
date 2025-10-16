import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRuleInvocation
 */
export class HaleyMindRuleInvocation extends VITAL_Node {
  public readonly invocationGraphDataManagementTypeURI?: string;
  public readonly invocationToRuleURI?: string;
  public readonly haleyMindAppURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindRuleInvocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInvocationGraphDataManagementTypeURI',
        tsPropertyName: 'invocationGraphDataManagementTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInvocationToRuleURI',
        tsPropertyName: 'invocationToRuleURI',
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
      }
    ];
  }


}
