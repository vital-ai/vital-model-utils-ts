import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogExitBot
 */
export class DialogExitBot extends DialogAction {
  public readonly keepChannelEntryText?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogExitBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isKeepChannelEntryText',
        tsPropertyName: 'keepChannelEntryText',
        type: 'boolean',
        required: false
      }
    ];
  }


}
