import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#DomainModel
 */
export class DomainModel extends VITAL_Node {
  public readonly defaultPackageValue?: string;
  public readonly backwardCompVersion?: string;
  public readonly preferred?: boolean;
  public readonly domainOWL?: string;
  public readonly versionInfo?: string;
  public readonly appID?: string;
  public readonly organizationID?: string;
  public readonly preferredImportVersions?: string;
  public readonly domainOWLHash?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DomainModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDefaultPackageValue',
        tsPropertyName: 'defaultPackageValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasBackwardCompVersion',
        tsPropertyName: 'backwardCompVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isPreferred',
        tsPropertyName: 'preferred',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDomainOWL',
        tsPropertyName: 'domainOWL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasVersionInfo',
        tsPropertyName: 'versionInfo',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasAppID',
        tsPropertyName: 'appID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasOrganizationID',
        tsPropertyName: 'organizationID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPreferredImportVersions',
        tsPropertyName: 'preferredImportVersions',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDomainOWLHash',
        tsPropertyName: 'domainOWLHash',
        type: 'string',
        required: false
      }
    ];
  }


}
