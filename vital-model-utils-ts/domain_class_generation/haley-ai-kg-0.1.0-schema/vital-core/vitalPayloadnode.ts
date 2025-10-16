import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_PayloadNode
 */
export class VITAL_PayloadNode extends VITAL_Node {
  public readonly serializedRDF?: string;
  public readonly serializedJSON?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VITAL_PayloadNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSerializedRDF',
        tsPropertyName: 'serializedRDF',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSerializedJSON',
        tsPropertyName: 'serializedJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
