import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PlayVideoDirectiveMessage
 */
export class PlayVideoDirectiveMessage extends UserInterfaceDirectiveMessage {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for PlayVideoDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
