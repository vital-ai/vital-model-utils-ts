import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount
 */
export class Edge_hasTwitterAccount extends VITAL_TaxonomyEdge {
  public readonly streamContextUser?: boolean;
  public readonly twitterOAuthToken?: string;
  public readonly oAuthTokenSecret?: string;

  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasTwitterAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#isStreamContextUser',
        tsPropertyName: 'streamContextUser',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterOAuthToken',
        tsPropertyName: 'twitterOAuthToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOAuthTokenSecret',
        tsPropertyName: 'oAuthTokenSecret',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasTwitterAccount
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasTwitterAccount';
  }
}
