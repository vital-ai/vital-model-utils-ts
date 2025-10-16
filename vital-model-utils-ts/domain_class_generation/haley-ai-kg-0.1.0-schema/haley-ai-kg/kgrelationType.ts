import { KGType } from './kgtype.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRelationType
 */
export class KGRelationType extends KGType {
  public readonly kGRelationTypeSymmetric?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRelationType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSymmetric',
        tsPropertyName: 'kGRelationTypeSymmetric',
        type: 'boolean',
        required: false
      }
    ];
  }


}
