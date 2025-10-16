import { AssetMessage } from './assetMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AssetLocationMessage
 */
export class AssetLocationMessage extends AssetMessage {
  public readonly location?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AssetLocationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocation',
        tsPropertyName: 'location',
        type: 'string',
        required: false
      }
    ];
  }


}
