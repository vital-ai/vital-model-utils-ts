import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogButton
 */
export class DialogButton extends Card {
  public readonly conditionalLogic?: string;
  public readonly questionCountExcluded?: boolean;
  public readonly id?: string;
  public readonly sectionHeaderHTML?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogButton
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionalLogic',
        tsPropertyName: 'conditionalLogic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountExcluded',
        tsPropertyName: 'questionCountExcluded',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSectionHeaderHTML',
        tsPropertyName: 'sectionHeaderHTML',
        type: 'string',
        required: false
      }
    ];
  }


}
