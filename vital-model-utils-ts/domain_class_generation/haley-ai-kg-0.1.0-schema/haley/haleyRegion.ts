import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRegion
 */
export class HaleyRegion extends VITAL_Node {
  public readonly recentRegionPopulationYear?: number;
  public readonly centroidLatitude?: number;
  public readonly recentRegionPopulation?: number;
  public readonly centroidLongitude?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyRegion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRecentRegionPopulationYear',
        tsPropertyName: 'recentRegionPopulationYear',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCentroidLatitude',
        tsPropertyName: 'centroidLatitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRecentRegionPopulation',
        tsPropertyName: 'recentRegionPopulation',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCentroidLongitude',
        tsPropertyName: 'centroidLongitude',
        type: 'number',
        required: false
      }
    ];
  }


}
