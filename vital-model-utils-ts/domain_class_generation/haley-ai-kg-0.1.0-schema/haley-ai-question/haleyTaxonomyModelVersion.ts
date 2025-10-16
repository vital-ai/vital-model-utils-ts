import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion
 */
export class HaleyTaxonomyModelVersion extends VITAL_Node {
  public readonly activeTaxonomyModelVersion?: boolean;
  public readonly haleyTaxonomyBase?: string;
  public readonly haleyTaxonomyModelVersionActivateDate?: string | Date;
  public readonly haleyTaxonomyModelVersionDeactivateDate?: string | Date;
  public readonly haleyTaxonomyBaseVersion?: string;
  public readonly haleyTaxonomyModelURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyTaxonomyModelVersion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModelVersion',
        tsPropertyName: 'activeTaxonomyModelVersion',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionActivateDate',
        tsPropertyName: 'haleyTaxonomyModelVersionActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionDeactivateDate',
        tsPropertyName: 'haleyTaxonomyModelVersionDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelURI',
        tsPropertyName: 'haleyTaxonomyModelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
