import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Session
 */
export class Session extends VITAL_Node {
  public readonly botID?: string;
  public readonly userID?: string;
  public readonly chatMode?: string;
  public readonly sessionID?: string;
  public readonly authSessionID?: string;
  public readonly lastLeftAppMessageTime?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Session
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBotID',
        tsPropertyName: 'botID',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatMode',
        tsPropertyName: 'chatMode',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAuthSessionID',
        tsPropertyName: 'authSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastLeftAppMessageTime',
        tsPropertyName: 'lastLeftAppMessageTime',
        type: 'number',
        required: false
      }
    ];
  }


}
