import { DialogElement } from './dialogElement.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRecommendations
 */
export class DialogRecommendations extends DialogElement {
  public readonly solutionFactURI?: string;
  public readonly createSolutionFact?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogRecommendations
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSolutionFactURI',
        tsPropertyName: 'solutionFactURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCreateSolutionFact',
        tsPropertyName: 'createSolutionFact',
        type: 'boolean',
        required: false
      }
    ];
  }


}
