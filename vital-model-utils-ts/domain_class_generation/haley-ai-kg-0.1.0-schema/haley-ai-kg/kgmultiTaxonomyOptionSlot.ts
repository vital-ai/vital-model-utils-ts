import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomyOptionSlot
 */
export class KGMultiTaxonomyOptionSlot extends KGSlot {
  /** URI reference to one of: HaleyTaxonomy, KGCategoryType */
  public readonly kGTaxonomyOptionURI?: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy | http://vital.ai/ontology/haley-ai-kg#KGCategoryType;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGMultiTaxonomyOptionSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaxonomyOptionURI',
        tsPropertyName: 'kGTaxonomyOptionURI',
        type: 'http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy | http://vital.ai/ontology/haley-ai-kg#KGCategoryType',
        required: false,
        format: 'uri'
      }
    ];
  }


}
