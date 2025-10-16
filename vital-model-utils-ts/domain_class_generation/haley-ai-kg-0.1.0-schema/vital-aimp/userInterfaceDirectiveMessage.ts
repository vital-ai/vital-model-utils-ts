import { HaleyDirectiveMessage } from './haleyDirectiveMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserInterfaceDirectiveMessage
 */
export class UserInterfaceDirectiveMessage extends HaleyDirectiveMessage {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for UserInterfaceDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
