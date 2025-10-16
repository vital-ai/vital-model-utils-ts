import { AIMPEvent } from './aimpevent.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AssetMessage
 */
export class AssetMessage extends AIMPEvent {
  public readonly assetURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AssetMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAssetURI',
        tsPropertyName: 'assetURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
