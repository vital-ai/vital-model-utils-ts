import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRequest
 */
export class HaleyRequest extends VITAL_Node {
  public readonly requestMessageSerialized?: string;
  public readonly requestURI?: string;
  public readonly accountURI?: string;
  public readonly requestOriginMessageResponseSerialized?: string;
  public readonly requestMessageResponseSerialized?: string;
  public readonly responseChannelURI?: string;
  public readonly requestResponseTypeURI?: string;
  public readonly requestChannelHistory?: string;
  public readonly requestOriginMessageSerialized?: string;
  public readonly channelURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestMessageSerialized',
        tsPropertyName: 'requestMessageSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestOriginMessageResponseSerialized',
        tsPropertyName: 'requestOriginMessageResponseSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestMessageResponseSerialized',
        tsPropertyName: 'requestMessageResponseSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResponseChannelURI',
        tsPropertyName: 'responseChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestResponseTypeURI',
        tsPropertyName: 'requestResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestChannelHistory',
        tsPropertyName: 'requestChannelHistory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRequestOriginMessageSerialized',
        tsPropertyName: 'requestOriginMessageSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
