import { VitalSignsObject, VitalSignsPropertyDefinition } from './vital-signs-object.js';

/**
 * VITAL_GraphContainerObject_Base - foundational abstract base class for VitalSigns graph containers
 * The actual VITAL_GraphContainerObject class will be generated from the schema
 */
export abstract class VITAL_GraphContainerObject_Base extends VitalSignsObject {

  constructor() {
    super();
  }

  /**
   * Get property definitions for VITAL_GraphContainerObject_Base
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      // VITAL_GraphContainerObject_Base has no additional properties beyond VitalSignsObject
      // Generated classes will add schema-specific properties
    ];
  }
}
