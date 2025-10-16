import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Dialog
 */
export class Dialog extends VITAL_Node {
  public readonly dialogMode?: string;
  public readonly debugEnabled?: boolean;
  public readonly autoLoadUserProfile?: boolean;
  public readonly globalDialog?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Dialog
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDialogMode',
        tsPropertyName: 'dialogMode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDebugEnabled',
        tsPropertyName: 'debugEnabled',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalDialog',
        tsPropertyName: 'globalDialog',
        type: 'boolean',
        required: false
      }
    ];
  }


}
