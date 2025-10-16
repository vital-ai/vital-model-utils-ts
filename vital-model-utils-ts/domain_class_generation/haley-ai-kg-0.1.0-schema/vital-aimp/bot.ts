import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Bot
 */
export class Bot extends VITAL_Node {
  public readonly vitalRulesEnabled?: boolean;
  public readonly autoLoadUserProfile?: boolean;
  public readonly acceptSystemTicks?: boolean;
  public readonly globalBot?: boolean;
  public readonly keepLoaded?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Bot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isVitalRulesEnabled',
        tsPropertyName: 'vitalRulesEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAutoLoadUserProfile',
        tsPropertyName: 'autoLoadUserProfile',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAcceptSystemTicks',
        tsPropertyName: 'acceptSystemTicks',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalBot',
        tsPropertyName: 'globalBot',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isKeepLoaded',
        tsPropertyName: 'keepLoaded',
        type: 'boolean',
        required: false
      }
    ];
  }


}
