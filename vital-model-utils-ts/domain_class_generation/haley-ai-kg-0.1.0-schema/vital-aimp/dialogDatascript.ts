import { DialogElement } from './dialogElement.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogDatascript
 */
export class DialogDatascript extends DialogElement {
  public readonly factScope?: string;
  public readonly functionName?: string;
  public readonly serviceName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogDatascript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFunctionName',
        tsPropertyName: 'functionName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasServiceName',
        tsPropertyName: 'serviceName',
        type: 'string',
        required: false
      }
    ];
  }


}
