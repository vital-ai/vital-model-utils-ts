import { HaleyProcessorRequest } from './haleyProcessorRequest.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindProcessorRequest
 */
export class HaleyMindProcessorRequest extends HaleyProcessorRequest {
  public readonly haleyMindServiceRequestTypeURI?: string;
  public readonly haleyMindServiceRuleURI?: string;
  public readonly haleyMindContextIdentifier?: string;
  public readonly haleyMindServiceMetaQLName?: string;
  public readonly inferenceUpdate?: string;
  public readonly haleyMindAppURI?: string;
  public readonly inferenceQuery?: string;
  public readonly haleyMindServiceRuleName?: string;
  public readonly haleyMindProcessorRequestTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindProcessorRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceRequestTypeURI',
        tsPropertyName: 'haleyMindServiceRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceRuleURI',
        tsPropertyName: 'haleyMindServiceRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier',
        tsPropertyName: 'haleyMindContextIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceMetaQLName',
        tsPropertyName: 'haleyMindServiceMetaQLName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInferenceUpdate',
        tsPropertyName: 'inferenceUpdate',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAppURI',
        tsPropertyName: 'haleyMindAppURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInferenceQuery',
        tsPropertyName: 'inferenceQuery',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceRuleName',
        tsPropertyName: 'haleyMindServiceRuleName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindProcessorRequestTypeURI',
        tsPropertyName: 'haleyMindProcessorRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
