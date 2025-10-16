import { KGEntity } from './kgentity.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNewsEntity
 */
export class KGNewsEntity extends KGEntity {
  public readonly kGNewsEntityPrimaryDomain?: string;
  public readonly kGNewsEntityBiasMetric?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGNewsEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNewsEntityPrimaryDomain',
        tsPropertyName: 'kGNewsEntityPrimaryDomain',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNewsEntityBiasMetric',
        tsPropertyName: 'kGNewsEntityBiasMetric',
        type: 'number',
        required: false
      }
    ];
  }


}
