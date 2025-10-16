import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQuerySort
 */
export class KGQuerySort extends VITAL_Node {
  public readonly kGQuerySortDirectionURI?: string;
  public readonly kGQuerySortTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGQuerySort
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortDirectionURI',
        tsPropertyName: 'kGQuerySortDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQuerySortTypeURI',
        tsPropertyName: 'kGQuerySortTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
