import { VITAL_Edge_Base, VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_Edge
 */
export class VITAL_Edge extends VITAL_Edge_Base {


  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype, edgeSource, edgeDestination);

  }

  /**
   * Get property definitions for VITAL_Edge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for VITAL_Edge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#VITAL_Edge';
  }
}
