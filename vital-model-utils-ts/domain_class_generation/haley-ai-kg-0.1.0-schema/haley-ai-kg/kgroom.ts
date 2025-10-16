import { KGSpace } from './kgspace.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRoom
 */
export class KGRoom extends KGSpace {
  public readonly kGRoomType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRoom
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRoomType',
        tsPropertyName: 'kGRoomType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
