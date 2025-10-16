import { KGSlot } from './kgslot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot
 */
export class KGTaxonomySlot extends KGSlot {
  /** URI reference to one of: TaxonomyNode, KGCategory */
  public readonly taxonomySlotValue?: http://vital.ai/ontology/haley-taxonomy#TaxonomyNode | http://vital.ai/ontology/haley-ai-kg#KGCategory;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGTaxonomySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTaxonomySlotValue',
        tsPropertyName: 'taxonomySlotValue',
        type: 'http://vital.ai/ontology/haley-taxonomy#TaxonomyNode | http://vital.ai/ontology/haley-ai-kg#KGCategory',
        required: false,
        format: 'uri'
      }
    ];
  }


}
