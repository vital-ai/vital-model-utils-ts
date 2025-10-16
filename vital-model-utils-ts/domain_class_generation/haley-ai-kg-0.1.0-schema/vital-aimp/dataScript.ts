import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DataScript
 */
export class DataScript extends VITAL_Node {
  public readonly scriptBody?: string;
  public readonly globalDatascript?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DataScript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScriptBody',
        tsPropertyName: 'scriptBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalDatascript',
        tsPropertyName: 'globalDatascript',
        type: 'boolean',
        required: false
      }
    ];
  }


}
