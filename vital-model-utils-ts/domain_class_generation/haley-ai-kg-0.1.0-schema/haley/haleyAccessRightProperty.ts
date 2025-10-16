import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessRightProperty
 */
export class HaleyAccessRightProperty extends VITAL_Node {
  public readonly haleyAccessRightRuleTypeURI?: string;
  public readonly haleyAccessRightTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccessRightProperty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightRuleTypeURI',
        tsPropertyName: 'haleyAccessRightRuleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightTypeURI',
        tsPropertyName: 'haleyAccessRightTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
