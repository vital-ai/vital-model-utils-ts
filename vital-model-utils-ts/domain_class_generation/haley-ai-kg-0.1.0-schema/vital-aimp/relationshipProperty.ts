import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RelationshipProperty
 */
export class RelationshipProperty extends VITAL_Node {
  public readonly multivalueProperty?: boolean;
  public readonly relationshipPropertyType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for RelationshipProperty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMultivalueProperty',
        tsPropertyName: 'multivalueProperty',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRelationshipPropertyType',
        tsPropertyName: 'relationshipPropertyType',
        type: 'string',
        required: false
      }
    ];
  }


}
