import { VitalSignsObject, VitalSignsPropertyDefinition } from './vital-signs-object.js';

/**
 * VITAL_Node_Base - foundational abstract base class for all VitalSigns nodes
 * The actual VITAL_Node class will be generated from the schema
 */
export abstract class VITAL_Node_Base extends VitalSignsObject {

  constructor() {
    super();
  }

  /**
   * Get property definitions for VITAL_Node_Base
   * Generated classes will override this to add their own properties
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      // VITAL_Node_Base has no additional properties beyond VitalSignsObject
      // Generated classes will add schema-specific properties
    ];
  }
}
