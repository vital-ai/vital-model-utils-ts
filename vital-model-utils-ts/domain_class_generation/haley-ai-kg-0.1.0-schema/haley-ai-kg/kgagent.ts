import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAgent
 */
export class KGAgent extends KGNode {
  public readonly kGAgentAvatarLargeImageURL?: string;
  public readonly kGAgentIdentifier?: string;
  public readonly kGAgentType?: string;
  public readonly kGAgentRankingScoreUpdateDateTime?: string | Date;
  public readonly primaryLanguageType?: string;
  public readonly kGAgentModificationDateTime?: string | Date;
  public readonly kGAgentServiceURIs?: string;
  public readonly topCategoryURIs?: string;
  public readonly kGAgentAvatarImageURL?: string;
  public readonly kGAgentAvatarImageSourceURL?: string;
  public readonly kGAgentImplIdentifier?: string;
  public readonly kGAgentDeploymentURL?: string;
  public readonly kGAgentNameSlug?: string;
  public readonly kGBracketURIs?: string;
  public readonly kGAgentPublishStatusURI?: string;
  public readonly kGAgentDescription?: string;
  public readonly kGAgentRankingScore?: number;
  public readonly kGAgentName?: string;
  public readonly kGAgentPublisherName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAgent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarLargeImageURL',
        tsPropertyName: 'kGAgentAvatarLargeImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentIdentifier',
        tsPropertyName: 'kGAgentIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentType',
        tsPropertyName: 'kGAgentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScoreUpdateDateTime',
        tsPropertyName: 'kGAgentRankingScoreUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType',
        tsPropertyName: 'primaryLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentModificationDateTime',
        tsPropertyName: 'kGAgentModificationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentServiceURIs',
        tsPropertyName: 'kGAgentServiceURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTopCategoryURIs',
        tsPropertyName: 'topCategoryURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageURL',
        tsPropertyName: 'kGAgentAvatarImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentAvatarImageSourceURL',
        tsPropertyName: 'kGAgentAvatarImageSourceURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentImplIdentifier',
        tsPropertyName: 'kGAgentImplIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentDeploymentURL',
        tsPropertyName: 'kGAgentDeploymentURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentNameSlug',
        tsPropertyName: 'kGAgentNameSlug',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGBracketURIs',
        tsPropertyName: 'kGBracketURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublishStatusURI',
        tsPropertyName: 'kGAgentPublishStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentDescription',
        tsPropertyName: 'kGAgentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScore',
        tsPropertyName: 'kGAgentRankingScore',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentName',
        tsPropertyName: 'kGAgentName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherName',
        tsPropertyName: 'kGAgentPublisherName',
        type: 'string',
        required: false
      }
    ];
  }


}
