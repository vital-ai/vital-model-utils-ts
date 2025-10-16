import { KGEntity } from './kgentity.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGWebEntity
 */
export class KGWebEntity extends KGEntity {
  public readonly kGWebEntityDomainCategories?: number;
  public readonly kGWebEntityPrimaryDomain?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGWebEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGWebEntityDomainCategories',
        tsPropertyName: 'kGWebEntityDomainCategories',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGWebEntityPrimaryDomain',
        tsPropertyName: 'kGWebEntityPrimaryDomain',
        type: 'string',
        required: false
      }
    ];
  }


}
