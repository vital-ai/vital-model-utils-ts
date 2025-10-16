import { AIMPCommandMessage } from './aimpcommandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPIntent
 */
export class AIMPIntent extends AIMPCommandMessage {
  public readonly aIMPIntentType?: string;
  public readonly aIMPIntent?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPIntent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPIntentType',
        tsPropertyName: 'aIMPIntentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPIntent',
        tsPropertyName: 'aIMPIntent',
        type: 'string',
        required: false
      }
    ];
  }


}
