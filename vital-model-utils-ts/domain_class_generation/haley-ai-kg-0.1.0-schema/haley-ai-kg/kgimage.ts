import { KGMedia } from './kgmedia.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGImage
 */
export class KGImage extends KGMedia {
  public readonly kGPixelHeight?: number;
  public readonly kGPixelWidth?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGImage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPixelHeight',
        tsPropertyName: 'kGPixelHeight',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPixelWidth',
        tsPropertyName: 'kGPixelWidth',
        type: 'number',
        required: false
      }
    ];
  }


}
