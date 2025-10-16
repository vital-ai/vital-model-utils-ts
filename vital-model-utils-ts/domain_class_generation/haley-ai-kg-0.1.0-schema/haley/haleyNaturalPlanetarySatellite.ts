import { HaleyCelestialBody } from './haleyCelestialBody.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyNaturalPlanetarySatellite
 */
export class HaleyNaturalPlanetarySatellite extends HaleyCelestialBody {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyNaturalPlanetarySatellite
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
