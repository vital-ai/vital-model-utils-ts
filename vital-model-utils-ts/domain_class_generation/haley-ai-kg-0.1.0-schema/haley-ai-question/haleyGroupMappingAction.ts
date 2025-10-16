import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingAction
 */
export class HaleyGroupMappingAction extends VITAL_Node {
  public readonly haleyGroupMappingActionType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGroupMappingAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupMappingActionType',
        tsPropertyName: 'haleyGroupMappingActionType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
