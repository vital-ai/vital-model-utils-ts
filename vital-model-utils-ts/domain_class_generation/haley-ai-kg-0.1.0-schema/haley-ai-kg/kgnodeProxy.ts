import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNodeProxy
 */
export class KGNodeProxy extends VITAL_Node {
  public readonly kGNodeReferenceURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGNodeProxy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNodeReferenceURI',
        tsPropertyName: 'kGNodeReferenceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
