import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestionArray
 */
export class HaleyQuestionArray extends VITAL_Node {
  public readonly questionProfessionalText?: string;
  public readonly description?: string;
  public readonly questionIdentifier?: string;
  public readonly questionText?: string;
  public readonly questionGroupIndex?: number;
  public readonly longDescription?: string;
  public readonly haleyLanguageType?: string;
  public readonly questionAbbreviatedText?: string;
  public readonly questionFriendlyText?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQuestionArray
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionProfessionalText',
        tsPropertyName: 'questionProfessionalText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionIdentifier',
        tsPropertyName: 'questionIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionText',
        tsPropertyName: 'questionText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex',
        tsPropertyName: 'questionGroupIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongDescription',
        tsPropertyName: 'longDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText',
        tsPropertyName: 'questionAbbreviatedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText',
        tsPropertyName: 'questionFriendlyText',
        type: 'string',
        required: false
      }
    ];
  }


}
