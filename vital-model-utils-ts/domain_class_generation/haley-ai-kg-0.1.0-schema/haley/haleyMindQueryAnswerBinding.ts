import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding
 */
export class HaleyMindQueryAnswerBinding extends VITAL_Node {
  public readonly booleanAnswerBinding?: boolean;
  public readonly listDateTimeAnswerBinding?: string | Date;
  public readonly listIntegerAnswerBinding?: number;
  public readonly integerAnswerBinding?: number;
  public readonly stringAnswerBinding?: string;
  public readonly listStringAnswerBinding?: string;
  public readonly listBinaryAnswerBinding?: string;
  public readonly dateTimeAnswerBinding?: string | Date;
  public readonly binaryAnswerBinding?: string;
  public readonly listBooleanAnswerBinding?: boolean;
  public readonly answerBindingVariable?: string;
  public readonly doubleAnswerBinding?: number;
  public readonly listDoubleAnswerBinding?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindQueryAnswerBinding
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBooleanAnswerBinding',
        tsPropertyName: 'booleanAnswerBinding',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDateTimeAnswerBinding',
        tsPropertyName: 'listDateTimeAnswerBinding',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListIntegerAnswerBinding',
        tsPropertyName: 'listIntegerAnswerBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasIntegerAnswerBinding',
        tsPropertyName: 'integerAnswerBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasStringAnswerBinding',
        tsPropertyName: 'stringAnswerBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListStringAnswerBinding',
        tsPropertyName: 'listStringAnswerBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBinaryAnswerBinding',
        tsPropertyName: 'listBinaryAnswerBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDateTimeAnswerBinding',
        tsPropertyName: 'dateTimeAnswerBinding',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBinaryAnswerBinding',
        tsPropertyName: 'binaryAnswerBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBooleanAnswerBinding',
        tsPropertyName: 'listBooleanAnswerBinding',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnswerBindingVariable',
        tsPropertyName: 'answerBindingVariable',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDoubleAnswerBinding',
        tsPropertyName: 'doubleAnswerBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDoubleAnswerBinding',
        tsPropertyName: 'listDoubleAnswerBinding',
        type: 'number',
        required: false
      }
    ];
  }


}
