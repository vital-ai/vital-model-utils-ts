import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SingleSignOnProvider
 */
export class SingleSignOnProvider extends VITAL_Node {
  public readonly singleSignOnProviderIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SingleSignOnProvider
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSingleSignOnProviderIdentifier',
        tsPropertyName: 'singleSignOnProviderIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
