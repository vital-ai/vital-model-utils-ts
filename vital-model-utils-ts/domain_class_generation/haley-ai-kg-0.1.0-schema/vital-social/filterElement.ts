import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#FilterElement
 */
export class FilterElement extends VITAL_Node {


  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FilterElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
