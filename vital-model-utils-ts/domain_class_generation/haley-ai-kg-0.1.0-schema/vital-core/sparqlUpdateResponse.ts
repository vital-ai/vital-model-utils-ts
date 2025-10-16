import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlUpdateResponse
 */
export class SparqlUpdateResponse extends VITAL_Node {
  public readonly updatedTriplesCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SparqlUpdateResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUpdatedTriplesCount',
        tsPropertyName: 'updatedTriplesCount',
        type: 'number',
        required: false
      }
    ];
  }


}
