import { VitalOntObject } from './vitalOntObject.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntNode
 */
export class VitalOntNode extends VitalOntObject {
  public readonly vitalOntNodeType?: string;
  public readonly vitalOntDataType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalOntNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntNodeType',
        tsPropertyName: 'vitalOntNodeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntDataType',
        tsPropertyName: 'vitalOntDataType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
