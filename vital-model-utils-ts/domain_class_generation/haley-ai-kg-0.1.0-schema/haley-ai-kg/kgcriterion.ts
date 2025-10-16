import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCriterion
 */
export class KGCriterion extends VITAL_Node {
  public readonly kGQueryProvenanceURI?: string;
  public readonly kGQueryIntegerValue?: number;
  public readonly kGQueryKGMetaType?: string;
  public readonly kGQueryKGRelationType?: string;
  public readonly kGQueryMoveToConcepts?: string;
  public readonly kGQueryDateTimeValue?: string | Date;
  public readonly kGQueryNearVectorCertainty?: number;
  public readonly kGQueryLongTextValue?: string;
  public readonly kGQueryNearVectorDistance?: number;
  public readonly kGQueryUnknownValue?: string;
  public readonly kGQueryDoubleValue?: number;
  public readonly kGQuerySerializedVector?: string;
  public readonly kGQueryTaxonomyValue?: string;
  public readonly kGQueryBooleanValue?: boolean;
  public readonly kGConstraintComparatorURI?: string;
  public readonly kGQueryMultiChoiceValue?: string;
  public readonly kGQueryNearVectorForce?: number;
  public readonly kGQueryMultiTaxonomyValue?: string;
  public readonly kGQueryMoveFromConcepts?: string;
  public readonly kGCriterionTypeURI?: string;
  public readonly kGQueryChoiceValue?: string;
  public readonly kGQuerySubtypeExpansion?: boolean;
  public readonly kGQuerySubclassExpansion?: boolean;
  public readonly kGQueryKGType?: string;
  public readonly kGQueryTopKLimit?: number;
  public readonly kGQueryTextValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGCriterion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI',
        tsPropertyName: 'kGQueryProvenanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryIntegerValue',
        tsPropertyName: 'kGQueryIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType',
        tsPropertyName: 'kGQueryKGMetaType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGRelationType',
        tsPropertyName: 'kGQueryKGRelationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveToConcepts',
        tsPropertyName: 'kGQueryMoveToConcepts',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryDateTimeValue',
        tsPropertyName: 'kGQueryDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorCertainty',
        tsPropertyName: 'kGQueryNearVectorCertainty',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryLongTextValue',
        tsPropertyName: 'kGQueryLongTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorDistance',
        tsPropertyName: 'kGQueryNearVectorDistance',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryUnknownValue',
        tsPropertyName: 'kGQueryUnknownValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryDoubleValue',
        tsPropertyName: 'kGQueryDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQuerySerializedVector',
        tsPropertyName: 'kGQuerySerializedVector',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryTaxonomyValue',
        tsPropertyName: 'kGQueryTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryBooleanValue',
        tsPropertyName: 'kGQueryBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGConstraintComparatorURI',
        tsPropertyName: 'kGConstraintComparatorURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiChoiceValue',
        tsPropertyName: 'kGQueryMultiChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryNearVectorForce',
        tsPropertyName: 'kGQueryNearVectorForce',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMultiTaxonomyValue',
        tsPropertyName: 'kGQueryMultiTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryMoveFromConcepts',
        tsPropertyName: 'kGQueryMoveFromConcepts',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCriterionTypeURI',
        tsPropertyName: 'kGCriterionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryChoiceValue',
        tsPropertyName: 'kGQueryChoiceValue',
        type: 'string',
        required: false
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGType',
        tsPropertyName: 'kGQueryKGType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryTopKLimit',
        tsPropertyName: 'kGQueryTopKLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryTextValue',
        tsPropertyName: 'kGQueryTextValue',
        type: 'string',
        required: false
      }
    ];
  }


}
