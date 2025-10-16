import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-taxonomy#TaxonomyNode
 */
export class TaxonomyNode extends VITAL_Node {
  public readonly selectable?: boolean;
  public readonly description?: string;
  public readonly leafCategory?: boolean;
  public readonly rootCategory?: boolean;
  public readonly haleyTaxonomyBase?: string;
  public readonly externalID?: string;
  public readonly haleyTaxonomyBaseVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TaxonomyNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#isSelectable',
        tsPropertyName: 'selectable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#isLeafCategory',
        tsPropertyName: 'leafCategory',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#isRootCategory',
        tsPropertyName: 'rootCategory',
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
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#hasExternalID',
        tsPropertyName: 'externalID',
        type: 'string',
        required: false
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
