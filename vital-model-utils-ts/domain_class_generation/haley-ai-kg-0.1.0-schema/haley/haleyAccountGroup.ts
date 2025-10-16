import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountGroup
 */
export class HaleyAccountGroup extends VITAL_Node {
  public readonly accountGroupExternalIdentifier?: string;
  public readonly accountGroupIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccountGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountGroupExternalIdentifier',
        tsPropertyName: 'accountGroupExternalIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountGroupIdentifier',
        tsPropertyName: 'accountGroupIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
