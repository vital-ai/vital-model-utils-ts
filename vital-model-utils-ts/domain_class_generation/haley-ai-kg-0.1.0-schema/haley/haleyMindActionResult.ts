import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindActionResult
 */
export class HaleyMindActionResult extends VITAL_Node {
  public readonly haleyMindActionResultTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindActionResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindActionResultTypeURI',
        tsPropertyName: 'haleyMindActionResultTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
