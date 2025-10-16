import { TaxonomyNode } from '../haley-taxonomy/taxonomyNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#DomainCategory
 */
export class DomainCategory extends TaxonomyNode {
  public readonly domainCategoryIdentifier?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DomainCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDomainCategoryIdentifier',
        tsPropertyName: 'domainCategoryIdentifier',
        type: 'number',
        required: false
      }
    ];
  }


}
