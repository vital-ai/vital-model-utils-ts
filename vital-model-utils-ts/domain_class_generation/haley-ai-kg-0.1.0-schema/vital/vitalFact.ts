import { VITAL_HyperNode } from '../vital-core/vitalHypernode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VITAL_Fact
 */
export class VITAL_Fact extends VITAL_HyperNode {
  public readonly factEnabled?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VITAL_Fact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isFactEnabled',
        tsPropertyName: 'factEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
