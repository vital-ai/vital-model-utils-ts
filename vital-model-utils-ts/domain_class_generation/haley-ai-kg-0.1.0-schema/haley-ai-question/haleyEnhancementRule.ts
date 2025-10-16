import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRule
 */
export class HaleyEnhancementRule extends VITAL_Node {
  public readonly enhancementDescription?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyEnhancementRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasEnhancementDescription',
        tsPropertyName: 'enhancementDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
