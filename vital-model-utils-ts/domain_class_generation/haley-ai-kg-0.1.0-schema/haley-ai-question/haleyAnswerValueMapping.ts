import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerValueMapping
 */
export class HaleyAnswerValueMapping extends VITAL_Node {
  public readonly destinationMappedAnswerTypeURI?: string;
  public readonly haleyMappedRowURI?: string;
  public readonly haleyMappedRowTypeURI?: string;
  public readonly sourceMappedAnswerTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAnswerValueMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI',
        tsPropertyName: 'destinationMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowURI',
        tsPropertyName: 'haleyMappedRowURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedRowTypeURI',
        tsPropertyName: 'haleyMappedRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI',
        tsPropertyName: 'sourceMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
