import { Document } from '../vital-nlp/document.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#YouTubeComment
 */
export class YouTubeComment extends Document {
  public readonly commentID?: string;
  public readonly authorName?: string;
  public readonly channelID?: string;
  public readonly videoID?: string;
  public readonly socialLikeCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for YouTubeComment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCommentID',
        tsPropertyName: 'commentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorName',
        tsPropertyName: 'authorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasChannelID',
        tsPropertyName: 'channelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasVideoID',
        tsPropertyName: 'videoID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLikeCount',
        tsPropertyName: 'socialLikeCount',
        type: 'number',
        required: false
      }
    ];
  }


}
