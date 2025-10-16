import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessage
 */
export class AIMPMessage extends VITAL_Node {
  public readonly requestedPayloadStyleTypeURI?: string;
  public readonly keyHash?: string;
  /** URI reference to one of: HaleyAccessGroupRole, HaleyAccessTeamRole, HaleyAccessLoginRole, HaleyAccessOfficeRole, HaleyAccessBotRole, HaleyAccessAccountRole */
  public readonly accessGrantRoleOutcomeURI?: http://vital.ai/ontology/haley#HaleyAccessGroupRole | http://vital.ai/ontology/haley#HaleyAccessTeamRole | http://vital.ai/ontology/haley#HaleyAccessLoginRole | http://vital.ai/ontology/haley#HaleyAccessOfficeRole | http://vital.ai/ontology/haley#HaleyAccessBotRole | http://vital.ai/ontology/haley#HaleyAccessAccountRole;
  public readonly authSessionID?: string;
  public readonly partialResultTotalPayloadCount?: number;
  public readonly text?: string;
  public readonly masterUserID?: string;
  public readonly channelsHistory?: string;
  public readonly containsPII?: boolean;
  public readonly partialResultTotalMessageCount?: number;
  public readonly jweEncryptedString?: string;
  public readonly sessionID?: string;
  public readonly jweKeyIdentifier?: string;
  public readonly textToSpeak?: string;
  public readonly signature?: string;
  public readonly encryptedPayload?: string;
  public readonly payloadStyleTypeURI?: string;
  public readonly accountURI?: string;
  public readonly destinationAccountURI?: string;
  public readonly jwtKeyIdentifier?: string;
  public readonly timezone?: string;
  public readonly channelURI?: string;
  public readonly jwtEncodedString?: string;
  public readonly deviceInfo?: string;
  public readonly ipAddress?: string;
  public readonly botURI?: string;
  public readonly sourceUserName?: string;
  public readonly replyChannelURI?: string;
  public readonly endpointURI?: string;
  public readonly requestCompression?: boolean;
  public readonly interactMode?: boolean;
  public readonly internalOnly?: boolean;
  public readonly queueName?: string;
  public readonly sourceAccountName?: string;
  public readonly sourceAccountURI?: string;
  public readonly historyMessage?: boolean;
  public readonly loginURI?: string;
  public readonly channelHistoryListJSON?: string;
  public readonly compressed?: boolean;
  public readonly localTime?: string;
  public readonly sourceUserID?: string;
  public readonly sourceRequestURI?: string;
  public readonly geolocation?: string;
  public readonly channelHistoryItem?: string;
  public readonly partialResult?: boolean;
  public readonly partialResultMessageCount?: number;
  public readonly payload?: string;
  public readonly senderIdentity?: string;
  public readonly userID?: string;
  public readonly destinationAccountName?: string;
  public readonly geoAPIJSON?: string;
  public readonly dialogResponseTypeURI?: string;
  public readonly jwtJSON?: string;
  public readonly accessGrantOutcomeURI?: string;
  public readonly replyTo?: string;
  public readonly accessOutcomeSerialized?: string;
  public readonly authLoginTunnel?: boolean;
  public readonly recipientIdentity?: string;
  public readonly partialResultPayloadCount?: number;
  public readonly requestURI?: string;
  public readonly username?: string;
  public readonly reactionToSessionID?: string;
  public readonly broadcastOnly?: boolean;
  public readonly finalResponse?: boolean;
  public readonly activityTaskIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestedPayloadStyleTypeURI',
        tsPropertyName: 'requestedPayloadStyleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasKeyHash',
        tsPropertyName: 'keyHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantRoleOutcomeURI',
        tsPropertyName: 'accessGrantRoleOutcomeURI',
        type: 'http://vital.ai/ontology/haley#HaleyAccessGroupRole | http://vital.ai/ontology/haley#HaleyAccessTeamRole | http://vital.ai/ontology/haley#HaleyAccessLoginRole | http://vital.ai/ontology/haley#HaleyAccessOfficeRole | http://vital.ai/ontology/haley#HaleyAccessBotRole | http://vital.ai/ontology/haley#HaleyAccessAccountRole',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAuthSessionID',
        tsPropertyName: 'authSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultTotalPayloadCount',
        tsPropertyName: 'partialResultTotalPayloadCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMasterUserID',
        tsPropertyName: 'masterUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelsHistory',
        tsPropertyName: 'channelsHistory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isContainsPII',
        tsPropertyName: 'containsPII',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultTotalMessageCount',
        tsPropertyName: 'partialResultTotalMessageCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweEncryptedString',
        tsPropertyName: 'jweEncryptedString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweKeyIdentifier',
        tsPropertyName: 'jweKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSignature',
        tsPropertyName: 'signature',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEncryptedPayload',
        tsPropertyName: 'encryptedPayload',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayloadStyleTypeURI',
        tsPropertyName: 'payloadStyleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountURI',
        tsPropertyName: 'destinationAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtKeyIdentifier',
        tsPropertyName: 'jwtKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimezone',
        tsPropertyName: 'timezone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtEncodedString',
        tsPropertyName: 'jwtEncodedString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceInfo',
        tsPropertyName: 'deviceInfo',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIpAddress',
        tsPropertyName: 'ipAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBotURI',
        tsPropertyName: 'botURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserName',
        tsPropertyName: 'sourceUserName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasReplyChannelURI',
        tsPropertyName: 'replyChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndpointURI',
        tsPropertyName: 'endpointURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRequestCompression',
        tsPropertyName: 'requestCompression',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInteractMode',
        tsPropertyName: 'interactMode',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQueueName',
        tsPropertyName: 'queueName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountName',
        tsPropertyName: 'sourceAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountURI',
        tsPropertyName: 'sourceAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHistoryMessage',
        tsPropertyName: 'historyMessage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelHistoryListJSON',
        tsPropertyName: 'channelHistoryListJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCompressed',
        tsPropertyName: 'compressed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocalTime',
        tsPropertyName: 'localTime',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserID',
        tsPropertyName: 'sourceUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceRequestURI',
        tsPropertyName: 'sourceRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeolocation',
        tsPropertyName: 'geolocation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelHistoryItem',
        tsPropertyName: 'channelHistoryItem',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPartialResult',
        tsPropertyName: 'partialResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultMessageCount',
        tsPropertyName: 'partialResultMessageCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayload',
        tsPropertyName: 'payload',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderIdentity',
        tsPropertyName: 'senderIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUserID',
        tsPropertyName: 'userID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountName',
        tsPropertyName: 'destinationAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeoAPIJSON',
        tsPropertyName: 'geoAPIJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogResponseTypeURI',
        tsPropertyName: 'dialogResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtJSON',
        tsPropertyName: 'jwtJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantOutcomeURI',
        tsPropertyName: 'accessGrantOutcomeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isReplyTo',
        tsPropertyName: 'replyTo',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessOutcomeSerialized',
        tsPropertyName: 'accessOutcomeSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAuthLoginTunnel',
        tsPropertyName: 'authLoginTunnel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipientIdentity',
        tsPropertyName: 'recipientIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultPayloadCount',
        tsPropertyName: 'partialResultPayloadCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasReactionToSessionID',
        tsPropertyName: 'reactionToSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isFinalResponse',
        tsPropertyName: 'finalResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityTaskIdentifier',
        tsPropertyName: 'activityTaskIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
