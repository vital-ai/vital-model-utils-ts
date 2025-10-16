import { KGElement } from './kgelement.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRequest
 */
export class KGRequest extends KGElement {
  public readonly kGRequestType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRequestType',
        tsPropertyName: 'kGRequestType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
