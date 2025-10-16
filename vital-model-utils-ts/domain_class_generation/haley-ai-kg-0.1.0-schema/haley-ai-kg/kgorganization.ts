import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGOrganization
 */
export class KGOrganization extends KGNode {
  public readonly kGOrganizationType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGOrganizationType',
        tsPropertyName: 'kGOrganizationType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
