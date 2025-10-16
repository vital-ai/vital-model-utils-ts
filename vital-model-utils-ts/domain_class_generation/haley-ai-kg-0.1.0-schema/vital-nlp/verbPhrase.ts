import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#VerbPhrase
 */
export class VerbPhrase extends VITAL_Node {
  public readonly endTokenIndex?: number;
  public readonly startTokenIndex?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VerbPhrase
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndTokenIndex',
        tsPropertyName: 'endTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartTokenIndex',
        tsPropertyName: 'startTokenIndex',
        type: 'number',
        required: false
      }
    ];
  }


}
