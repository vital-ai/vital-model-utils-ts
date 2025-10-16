import { AIMPCommandMessage } from './aimpcommandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPCommand
 */
export class AIMPCommand extends AIMPCommandMessage {
  public readonly aIMPCommandOperationType?: string;
  public readonly aIMPCommandType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPCommandOperationType',
        tsPropertyName: 'aIMPCommandOperationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPCommandType',
        tsPropertyName: 'aIMPCommandType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
