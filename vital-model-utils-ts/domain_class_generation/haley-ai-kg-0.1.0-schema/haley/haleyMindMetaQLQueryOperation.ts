import { HaleyMindOperation } from './haleyMindOperation.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindMetaQLQueryOperation
 */
export class HaleyMindMetaQLQueryOperation extends HaleyMindOperation {
  public readonly ruleMetaQLQueryName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindMetaQLQueryOperation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRuleMetaQLQueryName',
        tsPropertyName: 'ruleMetaQLQueryName',
        type: 'string',
        required: false
      }
    ];
  }


}
