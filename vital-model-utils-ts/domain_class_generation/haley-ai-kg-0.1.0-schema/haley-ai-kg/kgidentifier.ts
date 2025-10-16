import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIdentifier
 */
export class KGIdentifier extends KGNode {
  public readonly kGIdentifierSourceURI?: string;
  public readonly kGIdentifierPrimaryID?: string;
  public readonly kGIdentifierSecondaryID?: string;
  public readonly kGIdentifierEnclosingID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGIdentifier
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierSourceURI',
        tsPropertyName: 'kGIdentifierSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierPrimaryID',
        tsPropertyName: 'kGIdentifierPrimaryID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierSecondaryID',
        tsPropertyName: 'kGIdentifierSecondaryID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifierEnclosingID',
        tsPropertyName: 'kGIdentifierEnclosingID',
        type: 'string',
        required: false
      }
    ];
  }


}
