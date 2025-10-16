import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding
 */
export class HaleyMindRuleParameterBinding extends VITAL_Node {
  public readonly integerParameterBinding?: number;
  public readonly listBooleanParameterBinding?: boolean;
  public readonly doubleParameterBinding?: number;
  public readonly listDoubleParameterBinding?: number;
  public readonly listDateTimeParameterBinding?: string | Date;
  public readonly booleanParameterBinding?: boolean;
  public readonly binaryParameterBinding?: string;
  public readonly dateTimeParameterBinding?: string | Date;
  public readonly listBinaryParameterBinding?: string;
  public readonly stringParameterBinding?: string;
  public readonly parameterBindingVariable?: string;
  public readonly listStringParameterBinding?: string;
  public readonly listIntegerParameterBinding?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindRuleParameterBinding
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasIntegerParameterBinding',
        tsPropertyName: 'integerParameterBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBooleanParameterBinding',
        tsPropertyName: 'listBooleanParameterBinding',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDoubleParameterBinding',
        tsPropertyName: 'doubleParameterBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDoubleParameterBinding',
        tsPropertyName: 'listDoubleParameterBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDateTimeParameterBinding',
        tsPropertyName: 'listDateTimeParameterBinding',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBooleanParameterBinding',
        tsPropertyName: 'booleanParameterBinding',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBinaryParameterBinding',
        tsPropertyName: 'binaryParameterBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDateTimeParameterBinding',
        tsPropertyName: 'dateTimeParameterBinding',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBinaryParameterBinding',
        tsPropertyName: 'listBinaryParameterBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasStringParameterBinding',
        tsPropertyName: 'stringParameterBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasParameterBindingVariable',
        tsPropertyName: 'parameterBindingVariable',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListStringParameterBinding',
        tsPropertyName: 'listStringParameterBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListIntegerParameterBinding',
        tsPropertyName: 'listIntegerParameterBinding',
        type: 'number',
        required: false
      }
    ];
  }


}
