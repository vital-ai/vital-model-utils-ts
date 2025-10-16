import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAppEvent
 */
export class KGAppEvent extends VITAL_Node {
  public readonly kGAppEventType?: string;
  public readonly kGAppEventAgent?: string;
  public readonly kGAppEventSourceURI?: string;
  public readonly kGAppEventActorURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAppEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventType',
        tsPropertyName: 'kGAppEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventAgent',
        tsPropertyName: 'kGAppEventAgent',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventSourceURI',
        tsPropertyName: 'kGAppEventSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventActorURI',
        tsPropertyName: 'kGAppEventActorURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
