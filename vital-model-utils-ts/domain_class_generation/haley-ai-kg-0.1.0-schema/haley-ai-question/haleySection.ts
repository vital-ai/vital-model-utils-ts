import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySection
 */
export class HaleySection extends VITAL_Node {
  public readonly skipEmptyRows?: boolean;
  public readonly skipEmptyQuestions?: boolean;
  public readonly includedWhenEmpty?: boolean;
  public readonly hiddenInGroupDisplay?: boolean;
  public readonly sectionIndex?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleySection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSkipEmptyRows',
        tsPropertyName: 'skipEmptyRows',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSkipEmptyQuestions',
        tsPropertyName: 'skipEmptyQuestions',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isIncludedWhenEmpty',
        tsPropertyName: 'includedWhenEmpty',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSectionIndex',
        tsPropertyName: 'sectionIndex',
        type: 'number',
        required: false
      }
    ];
  }


}
