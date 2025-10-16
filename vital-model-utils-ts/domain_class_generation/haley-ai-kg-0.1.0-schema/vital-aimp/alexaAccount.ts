import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AlexaAccount
 */
export class AlexaAccount extends VITAL_Node {
  public readonly alexaSkillName?: string;
  public readonly alexaUserID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AlexaAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAlexaSkillName',
        tsPropertyName: 'alexaSkillName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAlexaUserID',
        tsPropertyName: 'alexaUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
