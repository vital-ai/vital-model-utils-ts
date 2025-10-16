import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#KnowledgeExtractionCard
 */
export class KnowledgeExtractionCard extends Card {
  public readonly knowledgeExtractionJSON?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KnowledgeExtractionCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasKnowledgeExtractionJSON',
        tsPropertyName: 'knowledgeExtractionJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
