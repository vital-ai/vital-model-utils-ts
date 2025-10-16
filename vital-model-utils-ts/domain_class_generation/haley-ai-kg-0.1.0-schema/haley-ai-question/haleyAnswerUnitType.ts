import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerUnitType
 */
export class HaleyAnswerUnitType extends VITAL_Node {
  public readonly haleyUnitSystemURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerUnitType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyUnitSystemURI',
        tsPropertyName: 'haleyUnitSystemURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
