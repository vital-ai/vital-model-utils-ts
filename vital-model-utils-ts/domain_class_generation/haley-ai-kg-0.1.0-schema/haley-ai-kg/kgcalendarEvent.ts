import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent
 */
export class KGCalendarEvent extends KGNode {
  public readonly kGCalendarEventType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGCalendarEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType',
        tsPropertyName: 'kGCalendarEventType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
