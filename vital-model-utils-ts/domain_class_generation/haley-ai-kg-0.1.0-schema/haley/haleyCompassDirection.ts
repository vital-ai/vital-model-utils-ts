import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCompassDirection
 */
export class HaleyCompassDirection extends VITAL_Node {
  public readonly compassDirectionSymbol?: string;
  public readonly compassDirectionLabel?: string;
  public readonly compassDirectionPosition?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyCompassDirection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCompassDirectionSymbol',
        tsPropertyName: 'compassDirectionSymbol',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCompassDirectionLabel',
        tsPropertyName: 'compassDirectionLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCompassDirectionPosition',
        tsPropertyName: 'compassDirectionPosition',
        type: 'number',
        required: false
      }
    ];
  }


}
