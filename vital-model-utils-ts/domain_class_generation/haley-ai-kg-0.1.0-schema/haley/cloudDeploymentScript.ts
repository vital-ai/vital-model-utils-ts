import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudDeploymentScript
 */
export class CloudDeploymentScript extends HaleyCloud {
  public readonly deploymentScriptCode?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudDeploymentScript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDeploymentScriptCode',
        tsPropertyName: 'deploymentScriptCode',
        type: 'string',
        required: false
      }
    ];
  }


}
