import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RelationshipSet
 */
export class RelationshipSet extends VITAL_Node {
  public readonly globalRelationshipSet?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for RelationshipSet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalRelationshipSet',
        tsPropertyName: 'globalRelationshipSet',
        type: 'boolean',
        required: false
      }
    ];
  }


}
