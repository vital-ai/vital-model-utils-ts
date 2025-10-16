import { VitalOntObject } from './vitalOntObject.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntHyperEdge
 */
export class VitalOntHyperEdge extends VitalOntObject {
  public readonly vitalOntHyperEdgeType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalOntHyperEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntHyperEdgeType',
        tsPropertyName: 'vitalOntHyperEdgeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
