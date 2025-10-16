import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGPlace
 */
export class KGPlace extends KGNode {
  public readonly kGPlaceIdentifier?: string;
  public readonly kGPlaceJSON?: string;
  public readonly haleyRegionURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGPlace
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPlaceIdentifier',
        tsPropertyName: 'kGPlaceIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPlaceJSON',
        tsPropertyName: 'kGPlaceJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasHaleyRegionURI',
        tsPropertyName: 'haleyRegionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
