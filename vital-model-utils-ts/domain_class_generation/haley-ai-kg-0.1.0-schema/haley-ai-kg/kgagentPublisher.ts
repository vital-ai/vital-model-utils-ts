import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher
 */
export class KGAgentPublisher extends KGNode {
  public readonly kGAgentPublisherType?: string;
  public readonly kGAgentPublisherWebsiteURL?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAgentPublisher
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherType',
        tsPropertyName: 'kGAgentPublisherType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherWebsiteURL',
        tsPropertyName: 'kGAgentPublisherWebsiteURL',
        type: 'string',
        required: false
      }
    ];
  }


}
