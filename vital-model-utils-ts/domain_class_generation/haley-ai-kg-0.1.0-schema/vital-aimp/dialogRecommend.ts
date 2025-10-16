import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRecommend
 */
export class DialogRecommend extends DialogAction {
  public readonly timeoutSeconds?: number;
  public readonly propertyName?: string;
  public readonly graphObjectsLinked?: boolean;
  public readonly errorMessagePropertyName?: string;
  public readonly statusPropertyName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogRecommend
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds',
        tsPropertyName: 'timeoutSeconds',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked',
        tsPropertyName: 'graphObjectsLinked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName',
        tsPropertyName: 'errorMessagePropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusPropertyName',
        tsPropertyName: 'statusPropertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
