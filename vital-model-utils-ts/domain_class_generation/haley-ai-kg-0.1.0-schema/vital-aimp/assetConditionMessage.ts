import { AssetMessage } from './assetMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AssetConditionMessage
 */
export class AssetConditionMessage extends AssetMessage {
  public readonly humidity?: number;
  public readonly temperature?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AssetConditionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasHumidity',
        tsPropertyName: 'humidity',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTemperature',
        tsPropertyName: 'temperature',
        type: 'number',
        required: false
      }
    ];
  }


}
