import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EnlargeCardDirectiveMessage
 */
export class EnlargeCardDirectiveMessage extends UserInterfaceDirectiveMessage {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for EnlargeCardDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
