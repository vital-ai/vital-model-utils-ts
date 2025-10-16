import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SelectGridItemDirectiveMessage
 */
export class SelectGridItemDirectiveMessage extends UserInterfaceDirectiveMessage {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SelectGridItemDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
