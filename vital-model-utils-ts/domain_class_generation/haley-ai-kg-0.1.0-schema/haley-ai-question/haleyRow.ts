import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyRow
 */
export class HaleyRow extends VITAL_Node {
  public readonly questionProfessionalText?: string;
  public readonly hiddenInGroupDisplay?: boolean;
  public readonly rowIndex?: number;
  public readonly haleyGroupDisplayTypeURI?: string;
  public readonly mappingObjectName?: string;
  public readonly rowID?: string;
  public readonly questionAbbreviatedText?: string;
  public readonly rowCounter?: string;
  public readonly rowHorizontalColumnNameList?: string;
  public readonly readOnlyRowValue?: boolean;
  public readonly questionFriendlyText?: string;
  public readonly rowHorizontalMaxColumns?: number;
  public readonly associatedWithMapping?: boolean;
  public readonly questionText?: string;
  public readonly questionGroupIndex?: number;
  public readonly haleyRowTypeURI?: string;
  public readonly calculatedRowValue?: boolean;
  public readonly haleyLanguageType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyRow
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowIndex',
        tsPropertyName: 'rowIndex',
        type: 'number',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappingObjectName',
        tsPropertyName: 'mappingObjectName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowID',
        tsPropertyName: 'rowID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasQuestionAbbreviatedText',
        tsPropertyName: 'questionAbbreviatedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowCounter',
        tsPropertyName: 'rowCounter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowHorizontalColumnNameList',
        tsPropertyName: 'rowHorizontalColumnNameList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyRowValue',
        tsPropertyName: 'readOnlyRowValue',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowHorizontalMaxColumns',
        tsPropertyName: 'rowHorizontalMaxColumns',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAssociatedWithMapping',
        tsPropertyName: 'associatedWithMapping',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI',
        tsPropertyName: 'haleyRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isCalculatedRowValue',
        tsPropertyName: 'calculatedRowValue',
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
