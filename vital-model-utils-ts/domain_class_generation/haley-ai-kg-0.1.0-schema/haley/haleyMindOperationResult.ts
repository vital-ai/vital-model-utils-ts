import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindOperationResult
 */
export class HaleyMindOperationResult extends VITAL_Node {
  public readonly haleyMindOperationURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindOperationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindOperationURI',
        tsPropertyName: 'haleyMindOperationURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
