import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindPlanRequest
 */
export class HaleyMindPlanRequest extends VITAL_Node {
  public readonly haleyMindPlanRequestTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindPlanRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindPlanRequestTypeURI',
        tsPropertyName: 'haleyMindPlanRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
