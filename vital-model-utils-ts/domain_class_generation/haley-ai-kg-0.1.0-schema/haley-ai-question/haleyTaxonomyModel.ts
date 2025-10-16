import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModel
 */
export class HaleyTaxonomyModel extends VITAL_Node {
  public readonly activeTaxonomyModel?: boolean;
  public readonly haleyTaxonomyModelDeactivateDate?: string | Date;
  public readonly haleyTaxonomyBase?: string;
  public readonly currentHaleyTaxonomyModelVersionURI?: string;
  public readonly currentHaleyTaxonomyModelVersion?: string;
  public readonly haleyTaxonomyModelActivateDate?: string | Date;
  public readonly haleyTaxonomyBaseVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyTaxonomyModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModel',
        tsPropertyName: 'activeTaxonomyModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelDeactivateDate',
        tsPropertyName: 'haleyTaxonomyModelDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase',
        tsPropertyName: 'haleyTaxonomyBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersionURI',
        tsPropertyName: 'currentHaleyTaxonomyModelVersionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyTaxonomyModelVersion',
        tsPropertyName: 'currentHaleyTaxonomyModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelActivateDate',
        tsPropertyName: 'haleyTaxonomyModelActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
