import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessagePayloadDef
 */
export class AIMPMessagePayloadDef extends VITAL_Node {
  public readonly haleyParameterURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPMessagePayloadDef
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyParameterURI',
        tsPropertyName: 'haleyParameterURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
