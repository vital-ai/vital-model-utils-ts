import { KGMedia } from './kgmedia.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGVideo
 */
export class KGVideo extends KGMedia {
  public readonly kGMediaDuration?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGVideo
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGMediaDuration',
        tsPropertyName: 'kGMediaDuration',
        type: 'number',
        required: false
      }
    ];
  }


}
