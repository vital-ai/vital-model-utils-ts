import { VitalOntObject } from './vitalOntObject.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntHyperNode
 */
export class VitalOntHyperNode extends VitalOntObject {
  public readonly vitalOntHyperNodeType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalOntHyperNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntHyperNodeType',
        tsPropertyName: 'vitalOntHyperNodeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
