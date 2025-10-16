import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EntityProperty
 */
export class EntityProperty extends VITAL_Node {
  public readonly entityPropertyType?: string;
  public readonly multivalueProperty?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for EntityProperty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntityPropertyType',
        tsPropertyName: 'entityPropertyType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMultivalueProperty',
        tsPropertyName: 'multivalueProperty',
        type: 'boolean',
        required: false
      }
    ];
  }


}
