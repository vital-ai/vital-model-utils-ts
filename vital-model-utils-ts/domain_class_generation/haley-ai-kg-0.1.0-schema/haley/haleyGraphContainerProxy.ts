import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyGraphContainerProxy
 */
export class HaleyGraphContainerProxy extends VITAL_Node {
  public readonly graphProxyURIList?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGraphContainerProxy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasGraphProxyURIList',
        tsPropertyName: 'graphProxyURIList',
        type: 'string',
        required: false
      }
    ];
  }


}
