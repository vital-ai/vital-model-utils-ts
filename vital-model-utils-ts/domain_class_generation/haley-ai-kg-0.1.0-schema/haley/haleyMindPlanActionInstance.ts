import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindPlanActionInstance
 */
export class HaleyMindPlanActionInstance extends VITAL_Node {
  public readonly haleyMindPlanAction?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindPlanActionInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindPlanAction',
        tsPropertyName: 'haleyMindPlanAction',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
