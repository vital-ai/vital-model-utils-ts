import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessRightContext
 */
export class HaleyAccessRightContext extends VITAL_Node {
  public readonly accessRightChannelContextURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccessRightContext
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRightChannelContextURI',
        tsPropertyName: 'accessRightChannelContextURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
