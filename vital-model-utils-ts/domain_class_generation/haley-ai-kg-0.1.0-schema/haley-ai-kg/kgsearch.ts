import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSearch
 */
export class KGSearch extends KGNode {
  public readonly kGSearchDateTime?: string | Date;
  public readonly kGSearchType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGSearch
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSearchDateTime',
        tsPropertyName: 'kGSearchDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSearchType',
        tsPropertyName: 'kGSearchType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
