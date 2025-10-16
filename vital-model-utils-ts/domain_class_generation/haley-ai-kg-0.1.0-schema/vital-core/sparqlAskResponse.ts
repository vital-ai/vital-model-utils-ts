import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlAskResponse
 */
export class SparqlAskResponse extends VITAL_Node {
  public readonly positiveResponse?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SparqlAskResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isPositiveResponse',
        tsPropertyName: 'positiveResponse',
        type: 'boolean',
        required: false
      }
    ];
  }


}
