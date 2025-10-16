import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestion
 */
export class HaleyQuestion extends VITAL_Node {
  public readonly rowNameQuestion?: boolean;
  public readonly hiddenQuestion?: boolean;
  public readonly questionProfessionalText?: string;
  public readonly description?: string;
  public readonly questionIdentifier?: string;
  public readonly haleyQuestionStatus?: string;
  public readonly hiddenInGroupDisplay?: boolean;
  public readonly haleyGroupDisplayTypeURI?: string;
  public readonly hiddenInPopform?: boolean;
  public readonly questionAbbreviatedText?: string;
  public readonly includeInSectionPopform?: boolean;
  public readonly questionFriendlyText?: string;
  public readonly horizontalColumnAssignment?: number;
  public readonly dependencyEnabled?: boolean;
  public readonly questionGroupIndex?: number;
  public readonly questionText?: string;
  public readonly longDescription?: string;
  public readonly notificationContent?: boolean;
  public readonly haleyLanguageType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRowNameQuestion',
        tsPropertyName: 'rowNameQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenQuestion',
        tsPropertyName: 'hiddenQuestion',
        type: 'boolean',
        required: false
      },
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestionStatus',
        tsPropertyName: 'haleyQuestionStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupDisplayTypeURI',
        tsPropertyName: 'haleyGroupDisplayTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInPopform',
        tsPropertyName: 'hiddenInPopform',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText',
        tsPropertyName: 'questionAbbreviatedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isIncludeInSectionPopform',
        tsPropertyName: 'includeInSectionPopform',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionFriendlyText',
        tsPropertyName: 'questionFriendlyText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHorizontalColumnAssignment',
        tsPropertyName: 'horizontalColumnAssignment',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDependencyEnabled',
        tsPropertyName: 'dependencyEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionGroupIndex',
        tsPropertyName: 'questionGroupIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionText',
        tsPropertyName: 'questionText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongDescription',
        tsPropertyName: 'longDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isNotificationContent',
        tsPropertyName: 'notificationContent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
