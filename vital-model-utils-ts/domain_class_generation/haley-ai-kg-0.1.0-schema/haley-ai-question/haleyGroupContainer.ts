import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupContainer
 */
export class HaleyGroupContainer extends VITAL_Node {
  public readonly serializedContainerJSON?: string;
  public readonly haleyGroupBaseVersion?: string;
  public readonly haleyTaxonomyBaseVersion?: string;
  public readonly haleyParameterURI?: string;
  public readonly containerUpdateTime?: string | Date;
  public readonly containerGroupURI?: string;
  public readonly compressed?: boolean;
  public readonly haleyTaxonomyBase?: string;
  public readonly haleyGroupBase?: string;
  public readonly serializedContainer?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGroupContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSerializedContainerJSON',
        tsPropertyName: 'serializedContainerJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion',
        tsPropertyName: 'haleyGroupBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyParameterURI',
        tsPropertyName: 'haleyParameterURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime',
        tsPropertyName: 'containerUpdateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasContainerGroupURI',
        tsPropertyName: 'containerGroupURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCompressed',
        tsPropertyName: 'compressed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase',
        tsPropertyName: 'haleyTaxonomyBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase',
        tsPropertyName: 'haleyGroupBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSerializedContainer',
        tsPropertyName: 'serializedContainer',
        type: 'string',
        required: false
      }
    ];
  }


}
