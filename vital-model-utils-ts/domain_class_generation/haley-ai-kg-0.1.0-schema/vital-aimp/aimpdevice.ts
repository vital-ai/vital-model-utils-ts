import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPDevice
 */
export class AIMPDevice extends VITAL_Node {
  public readonly visualDevice?: boolean;
  public readonly audioDevice?: boolean;
  public readonly deviceID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isVisualDevice',
        tsPropertyName: 'visualDevice',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAudioDevice',
        tsPropertyName: 'audioDevice',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceID',
        tsPropertyName: 'deviceID',
        type: 'string',
        required: false
      }
    ];
  }


}
