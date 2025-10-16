import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatRule
 */
export class ChatRule extends VITAL_Node {
  public readonly chatRuleSetURI?: string;
  public readonly chatRuleResponse?: string;
  public readonly chatRulePattern?: string;
  public readonly chatRuleID?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ChatRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleSetURI',
        tsPropertyName: 'chatRuleSetURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleResponse',
        tsPropertyName: 'chatRuleResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRulePattern',
        tsPropertyName: 'chatRulePattern',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRuleID',
        tsPropertyName: 'chatRuleID',
        type: 'number',
        required: false
      }
    ];
  }


}
