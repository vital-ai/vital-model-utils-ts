import { HaleyCloud } from './haleyCloud.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudDeploymentMessage
 */
export class CloudDeploymentMessage extends HaleyCloud {
  public readonly deploymentMessage?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloudDeploymentMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDeploymentMessage',
        tsPropertyName: 'deploymentMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
