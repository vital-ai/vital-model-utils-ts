import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGResource
 */
export class KGResource extends KGNode {
  public readonly kGResourceName?: string;
  public readonly kGResourceDescription?: string;
  public readonly kGResourceType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGResource
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResourceName',
        tsPropertyName: 'kGResourceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResourceDescription',
        tsPropertyName: 'kGResourceDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResourceType',
        tsPropertyName: 'kGResourceType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
