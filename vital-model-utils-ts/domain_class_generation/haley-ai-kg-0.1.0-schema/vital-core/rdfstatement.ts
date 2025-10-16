import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#RDFStatement
 */
export class RDFStatement extends VITAL_Node {
  public readonly rdfContext?: string;
  public readonly rdfSubject?: string;
  public readonly rdfPredicate?: string;
  public readonly rdfObject?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for RDFStatement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfContext',
        tsPropertyName: 'rdfContext',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfSubject',
        tsPropertyName: 'rdfSubject',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfPredicate',
        tsPropertyName: 'rdfPredicate',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRdfObject',
        tsPropertyName: 'rdfObject',
        type: 'string',
        required: false
      }
    ];
  }


}
