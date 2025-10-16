import { VitalSignsObject, VitalSignsPropertyDefinition } from './vital-signs-object.js';

/**
 * VITAL_HyperNode_Base - foundational abstract base class for VitalSigns hyper-nodes
 * The actual VITAL_HyperNode class will be generated from the schema
 */
export abstract class VITAL_HyperNode_Base extends VitalSignsObject {

  constructor() {
    super();
  }

  /**
   * Get property definitions for VITAL_HyperNode_Base
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      // VITAL_HyperNode_Base has no additional properties beyond VitalSignsObject
      // Generated classes will add schema-specific properties
    ];
  }
}
