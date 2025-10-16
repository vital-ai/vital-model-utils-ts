import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTypePath
 */
export class KGTypePath extends VITAL_Node {
  public readonly kGTaskType?: string;
  public readonly kGQueryProvenanceURI?: string;
  public readonly kGEntityType?: string;
  public readonly kGFileType?: string;
  public readonly kGQueryKGMetaType?: string;
  public readonly kGEventType?: string;
  public readonly kGSlotType?: string;
  public readonly kGRelationType?: string;
  public readonly kGFrameType?: string;
  public readonly kGDocumentType?: string;
  public readonly kGInteractionType?: string;
  public readonly kGType?: string;
  public readonly kGCategoryType?: string;
  public readonly kGCalendarEventType?: string;
  public readonly kGQuerySubtypeExpansion?: boolean;
  public readonly kGQuerySubclassExpansion?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGTypePath
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaskType',
        tsPropertyName: 'kGTaskType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI',
        tsPropertyName: 'kGQueryProvenanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityType',
        tsPropertyName: 'kGEntityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFileType',
        tsPropertyName: 'kGFileType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType',
        tsPropertyName: 'kGQueryKGMetaType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEventType',
        tsPropertyName: 'kGEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotType',
        tsPropertyName: 'kGSlotType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRelationType',
        tsPropertyName: 'kGRelationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameType',
        tsPropertyName: 'kGFrameType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType',
        tsPropertyName: 'kGDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType',
        tsPropertyName: 'kGInteractionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGType',
        tsPropertyName: 'kGType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCategoryType',
        tsPropertyName: 'kGCategoryType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType',
        tsPropertyName: 'kGCalendarEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGQuerySubtypeExpansion',
        tsPropertyName: 'kGQuerySubtypeExpansion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGQuerySubclassExpansion',
        tsPropertyName: 'kGQuerySubclassExpansion',
        type: 'boolean',
        required: false
      }
    ];
  }


}
