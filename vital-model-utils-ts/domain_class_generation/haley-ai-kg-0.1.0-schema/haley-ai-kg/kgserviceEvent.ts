import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGServiceEvent
 */
export class KGServiceEvent extends VITAL_Node {
  public readonly kGServiceEventUsername?: string;
  public readonly kGServiceEventMetaJSON?: string;
  public readonly kGServiceURI?: string;
  public readonly kGServiceEventUUID?: string;
  public readonly kGServiceEventTimestamp?: string | Date;
  public readonly kGServiceEventSpaceIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGServiceEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventUsername',
        tsPropertyName: 'kGServiceEventUsername',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventMetaJSON',
        tsPropertyName: 'kGServiceEventMetaJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceURI',
        tsPropertyName: 'kGServiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventUUID',
        tsPropertyName: 'kGServiceEventUUID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventTimestamp',
        tsPropertyName: 'kGServiceEventTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventSpaceIdentifier',
        tsPropertyName: 'kGServiceEventSpaceIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
