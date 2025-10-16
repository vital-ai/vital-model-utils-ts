import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Channel
 */
export class Channel extends VITAL_Node {
  public readonly stateManager?: string;
  public readonly defaultChannel?: boolean;
  public readonly orderInUI?: number;
  public readonly anonymousChannel?: boolean;
  public readonly channelOrgTypeURI?: string;
  public readonly systemChannel?: boolean;
  public readonly textEntryHidden?: boolean;
  public readonly lastActivityTime?: number;
  public readonly haleyMessageTextHidden?: boolean;
  public readonly orientationInUI?: string;
  public readonly botURI?: string;
  public readonly agentInstanceDeploymentURI?: string;
  public readonly childChannel?: boolean;
  public readonly channelTypeURI?: string;
  public readonly displayInUI?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Channel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStateManager',
        tsPropertyName: 'stateManager',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDefaultChannel',
        tsPropertyName: 'defaultChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOrderInUI',
        tsPropertyName: 'orderInUI',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAnonymousChannel',
        tsPropertyName: 'anonymousChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasChannelOrgTypeURI',
        tsPropertyName: 'channelOrgTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSystemChannel',
        tsPropertyName: 'systemChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTextEntryHidden',
        tsPropertyName: 'textEntryHidden',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastActivityTime',
        tsPropertyName: 'lastActivityTime',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHaleyMessageTextHidden',
        tsPropertyName: 'haleyMessageTextHidden',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOrientationInUI',
        tsPropertyName: 'orientationInUI',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentInstanceDeploymentURI',
        tsPropertyName: 'agentInstanceDeploymentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isChildChannel',
        tsPropertyName: 'childChannel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelTypeURI',
        tsPropertyName: 'channelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDisplayInUI',
        tsPropertyName: 'displayInUI',
        type: 'boolean',
        required: false
      }
    ];
  }


}
