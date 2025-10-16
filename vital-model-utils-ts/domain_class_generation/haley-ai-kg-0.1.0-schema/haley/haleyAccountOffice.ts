import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountOffice
 */
export class HaleyAccountOffice extends VITAL_Node {
  public readonly accountOfficeIdentifier?: string;
  public readonly accountOfficeExternalIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccountOffice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOfficeIdentifier',
        tsPropertyName: 'accountOfficeIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOfficeExternalIdentifier',
        tsPropertyName: 'accountOfficeExternalIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
