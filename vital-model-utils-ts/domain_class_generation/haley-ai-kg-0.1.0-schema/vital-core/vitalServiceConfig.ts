import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceConfig
 */
export class VitalServiceConfig extends VITAL_Node {
  public readonly connectionState?: string;
  public readonly connectionError?: string;
  public readonly targetAppID?: string;
  public readonly targetOrganizationID?: string;
  public readonly key?: string;
  public readonly uriGenerationStrategy?: string;
  public readonly appID?: string;
  public readonly organizationID?: string;
  public readonly defaultSegmentName?: string;
  public readonly primary?: boolean;
  public readonly configString?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalServiceConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConnectionState',
        tsPropertyName: 'connectionState',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConnectionError',
        tsPropertyName: 'connectionError',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasTargetAppID',
        tsPropertyName: 'targetAppID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasTargetOrganizationID',
        tsPropertyName: 'targetOrganizationID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasKey',
        tsPropertyName: 'key',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUriGenerationStrategy',
        tsPropertyName: 'uriGenerationStrategy',
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
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDefaultSegmentName',
        tsPropertyName: 'defaultSegmentName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isPrimary',
        tsPropertyName: 'primary',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConfigString',
        tsPropertyName: 'configString',
        type: 'string',
        required: false
      }
    ];
  }


}
