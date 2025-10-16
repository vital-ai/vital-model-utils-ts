import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SqlUpdateResponse
 */
export class SqlUpdateResponse extends VITAL_Node {
  public readonly updatedRowsCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SqlUpdateResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUpdatedRowsCount',
        tsPropertyName: 'updatedRowsCount',
        type: 'number',
        required: false
      }
    ];
  }


}
