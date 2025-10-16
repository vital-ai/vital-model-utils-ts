import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuery
 */
export class HaleyQuery extends VITAL_Node {
  public readonly haleyQueryAggregationOnlyRequest?: boolean;
  public readonly haleyQueryJSON?: string;
  public readonly haleyQueryName?: string;
  public readonly haleyQueryContainerRequest?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryAggregationOnlyRequest',
        tsPropertyName: 'haleyQueryAggregationOnlyRequest',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryJSON',
        tsPropertyName: 'haleyQueryJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryName',
        tsPropertyName: 'haleyQueryName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryContainerRequest',
        tsPropertyName: 'haleyQueryContainerRequest',
        type: 'boolean',
        required: false
      }
    ];
  }


}
