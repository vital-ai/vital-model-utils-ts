import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasSocialMediaCampaign
 */
export class Edge_hasSocialMediaCampaign extends VITAL_TaxonomyEdge {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for Edge_hasSocialMediaCampaign
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSocialMediaCampaign
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasSocialMediaCampaign';
  }
}
