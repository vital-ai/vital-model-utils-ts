import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerOption
 */
export class HaleyAnswerOption extends VITAL_Node {
  public readonly optionValue?: string;
  public readonly optionLargeImageURL?: string;
  public readonly suppressedAnswerOption?: boolean;
  public readonly optionName?: string;
  public readonly optionImageURL?: string;
  public readonly optionURL?: string;
  public readonly optionOrder?: number;
  public readonly optionSmallImageURL?: string;
  public readonly optionMediumImageURL?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerOption
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionValue',
        tsPropertyName: 'optionValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionLargeImageURL',
        tsPropertyName: 'optionLargeImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressedAnswerOption',
        tsPropertyName: 'suppressedAnswerOption',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionName',
        tsPropertyName: 'optionName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionImageURL',
        tsPropertyName: 'optionImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionURL',
        tsPropertyName: 'optionURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionOrder',
        tsPropertyName: 'optionOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionSmallImageURL',
        tsPropertyName: 'optionSmallImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOptionMediumImageURL',
        tsPropertyName: 'optionMediumImageURL',
        type: 'string',
        required: false
      }
    ];
  }


}
