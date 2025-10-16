import { KGElement } from './kgelement.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGResponse
 */
export class KGResponse extends KGElement {
  public readonly kGRequestURI?: string;
  public readonly kGResponseType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRequestURI',
        tsPropertyName: 'kGRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResponseType',
        tsPropertyName: 'kGResponseType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
