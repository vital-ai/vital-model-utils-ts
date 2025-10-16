import { DialogPart } from './dialogPart.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogAction
 */
export class DialogAction extends DialogPart {
  public readonly debugMessageBefore?: string;
  public readonly debugMessageAfter?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDebugMessageBefore',
        tsPropertyName: 'debugMessageBefore',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDebugMessageAfter',
        tsPropertyName: 'debugMessageAfter',
        type: 'string',
        required: false
      }
    ];
  }


}
