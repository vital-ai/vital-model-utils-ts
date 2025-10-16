import { Account } from '../vital/account.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccount
 */
export class HaleyAccount extends Account {
  public readonly enableEcho?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#isEnableEcho',
        tsPropertyName: 'enableEcho',
        type: 'boolean',
        required: false
      }
    ];
  }


}
