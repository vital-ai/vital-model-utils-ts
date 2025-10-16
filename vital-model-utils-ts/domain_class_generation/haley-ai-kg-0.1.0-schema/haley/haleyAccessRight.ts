import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessRight
 */
export class HaleyAccessRight extends VITAL_Node {
  public readonly accessObjectTypes?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccessRight
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessObjectTypes',
        tsPropertyName: 'accessObjectTypes',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
