import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGToolRequest
 */
export class KGToolRequest extends KGNode {
  public readonly kGToolRequestType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGToolRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGToolRequestType',
        tsPropertyName: 'kGToolRequestType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
