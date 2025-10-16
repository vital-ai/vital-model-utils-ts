import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherType
 */
export class HaleyWeatherType extends VITAL_Node {
  public readonly weatherTypeSmallIconPath?: string;
  public readonly weatherTypeDescriptor?: string;
  public readonly weatherTypeIndex?: number;
  public readonly weatherTypeMediumIconPath?: string;
  public readonly weatherTypeLargeIconPath?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyWeatherType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeSmallIconPath',
        tsPropertyName: 'weatherTypeSmallIconPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeDescriptor',
        tsPropertyName: 'weatherTypeDescriptor',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeIndex',
        tsPropertyName: 'weatherTypeIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeMediumIconPath',
        tsPropertyName: 'weatherTypeMediumIconPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeLargeIconPath',
        tsPropertyName: 'weatherTypeLargeIconPath',
        type: 'string',
        required: false
      }
    ];
  }


}
