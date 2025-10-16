import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasAccountDataSharedWith
 */
export class Edge_hasAccountDataSharedWith extends VITAL_PeerEdge {
  public readonly accountDataShareFilterRuleURI?: string;
  public readonly accountDataShareScopeURI?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasAccountDataSharedWith
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountDataShareFilterRuleURI',
        tsPropertyName: 'accountDataShareFilterRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountDataShareScopeURI',
        tsPropertyName: 'accountDataShareScopeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAccountDataSharedWith
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasAccountDataSharedWith';
  }
}
