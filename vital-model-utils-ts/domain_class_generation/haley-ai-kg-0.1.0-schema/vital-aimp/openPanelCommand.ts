import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#OpenPanelCommand
 */
export class OpenPanelCommand extends UserInterfaceCommandMessage {
  public readonly panelName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for OpenPanelCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPanelName',
        tsPropertyName: 'panelName',
        type: 'string',
        required: false
      }
    ];
  }


}
