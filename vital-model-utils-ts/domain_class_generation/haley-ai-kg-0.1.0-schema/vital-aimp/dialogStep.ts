import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogStep
 */
export class DialogStep extends DialogAction {
  public readonly comments?: string;
  public readonly commentedOut?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogStep
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasComments',
        tsPropertyName: 'comments',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCommentedOut',
        tsPropertyName: 'commentedOut',
        type: 'boolean',
        required: false
      }
    ];
  }


}
