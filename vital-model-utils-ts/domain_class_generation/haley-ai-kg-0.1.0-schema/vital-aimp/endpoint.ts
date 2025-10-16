import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Endpoint
 */
export class Endpoint extends VITAL_Node {
  public readonly defaultEndpoint?: boolean;
  public readonly channelRandomized?: boolean;
  public readonly endpointID?: string;
  public readonly tunnelingEnabled?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Endpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDefaultEndpoint',
        tsPropertyName: 'defaultEndpoint',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isChannelRandomized',
        tsPropertyName: 'channelRandomized',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndpointID',
        tsPropertyName: 'endpointID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTunnelingEnabled',
        tsPropertyName: 'tunnelingEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
