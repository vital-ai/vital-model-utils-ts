import { DialogElement } from './dialogElement.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQuery
 */
export class DialogQuery extends DialogElement {
  public readonly createResultListFact?: boolean;
  public readonly serviceName?: string;
  public readonly resultListFactURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCreateResultListFact',
        tsPropertyName: 'createResultListFact',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasServiceName',
        tsPropertyName: 'serviceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasResultListFactURI',
        tsPropertyName: 'resultListFactURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
