import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency
 */
export class HaleyEnhancementRuleDependency extends VITAL_Node {
  public readonly enhancementRuleEnablement?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyEnhancementRuleDependency
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleEnablement',
        tsPropertyName: 'enhancementRuleEnablement',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
