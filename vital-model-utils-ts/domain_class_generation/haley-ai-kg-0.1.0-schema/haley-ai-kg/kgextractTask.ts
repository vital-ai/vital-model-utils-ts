import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGExtractTask
 */
export class KGExtractTask extends KGNode {
  public readonly kGExtractorURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGExtractTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExtractorURI',
        tsPropertyName: 'kGExtractorURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
