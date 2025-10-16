import { Document } from '../vital-nlp/document.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Tweet
 */
export class Tweet extends Document {
  public readonly favoriteCount?: number;
  public readonly retweetCount?: number;
  public readonly originalAuthorName?: string;
  public readonly tweetStatus?: string;
  public readonly tweetID?: number;
  public readonly twitterLatitude?: number;
  public readonly inReplyToTweetID?: number;
  public readonly inReplyToScreenName?: string;
  public readonly originalAuthorScreenName?: string;
  public readonly authorScreenName?: string;
  public readonly originalAuthorID?: number;
  public readonly authorID?: number;
  public readonly authorName?: string;
  public readonly retweet?: boolean;
  public readonly twitterLongitude?: number;
  public readonly inReplyToUserID?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Tweet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFavoriteCount',
        tsPropertyName: 'favoriteCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRetweetCount',
        tsPropertyName: 'retweetCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOriginalAuthorName',
        tsPropertyName: 'originalAuthorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetStatus',
        tsPropertyName: 'tweetStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetID',
        tsPropertyName: 'tweetID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterLatitude',
        tsPropertyName: 'twitterLatitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToTweetID',
        tsPropertyName: 'inReplyToTweetID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToScreenName',
        tsPropertyName: 'inReplyToScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOriginalAuthorScreenName',
        tsPropertyName: 'originalAuthorScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorScreenName',
        tsPropertyName: 'authorScreenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOriginalAuthorID',
        tsPropertyName: 'originalAuthorID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorID',
        tsPropertyName: 'authorID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasAuthorName',
        tsPropertyName: 'authorName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#isRetweet',
        tsPropertyName: 'retweet',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterLongitude',
        tsPropertyName: 'twitterLongitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInReplyToUserID',
        tsPropertyName: 'inReplyToUserID',
        type: 'number',
        required: false
      }
    ];
  }


}
