import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpRelationInstance
 */
export class NlpRelationInstance extends VITAL_Node {
  public readonly relationType?: string;
  public readonly entityAuthor?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for NlpRelationInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasRelationType',
        tsPropertyName: 'relationType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityAuthor',
        tsPropertyName: 'entityAuthor',
        type: 'string',
        required: false
      }
    ];
  }


}
