import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIPAddress
 */
export class KGIPAddress extends KGNode {
  public readonly kGIPAddressJSON?: string;
  public readonly kGIPAddress?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGIPAddress
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIPAddressJSON',
        tsPropertyName: 'kGIPAddressJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIPAddress',
        tsPropertyName: 'kGIPAddress',
        type: 'string',
        required: false
      }
    ];
  }


}
