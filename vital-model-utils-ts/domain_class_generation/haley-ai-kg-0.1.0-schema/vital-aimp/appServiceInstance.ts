import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AppServiceInstance
 */
export class AppServiceInstance extends VITAL_Node {
  public readonly appServiceURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AppServiceInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAppServiceURI',
        tsPropertyName: 'appServiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
