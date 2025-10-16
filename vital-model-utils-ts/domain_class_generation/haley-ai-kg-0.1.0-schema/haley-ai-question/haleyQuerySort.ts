import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuerySort
 */
export class HaleyQuerySort extends VITAL_Node {
  public readonly querySortTypeURI?: string;
  public readonly querySortOrder?: number;
  public readonly querySortDirectionURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQuerySort
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuerySortTypeURI',
        tsPropertyName: 'querySortTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuerySortOrder',
        tsPropertyName: 'querySortOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuerySortDirectionURI',
        tsPropertyName: 'querySortDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
