import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntObject
 */
export class VitalOntObject extends VITAL_Node {
  public readonly vitalOntObjectDefinition?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalOntObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntObjectDefinition',
        tsPropertyName: 'vitalOntObjectDefinition',
        type: 'string',
        required: false
      }
    ];
  }


}
