import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GithubAccount
 */
export class GithubAccount extends VITAL_Node {
  public readonly githubOrganization?: string;
  public readonly githubInstallationIdentifier?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for GithubAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGithubOrganization',
        tsPropertyName: 'githubOrganization',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGithubInstallationIdentifier',
        tsPropertyName: 'githubInstallationIdentifier',
        type: 'number',
        required: false
      }
    ];
  }


}
