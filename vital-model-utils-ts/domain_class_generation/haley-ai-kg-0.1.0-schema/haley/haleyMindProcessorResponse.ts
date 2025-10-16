import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindProcessorResponse
 */
export class HaleyMindProcessorResponse extends VITAL_Node {
  public readonly statusOk?: boolean;
  public readonly haleyMindProcessorResponseTypeURI?: string;
  public readonly errorCode?: number;
  public readonly haleyMindContextIdentifier?: string;
  public readonly errorMessage?: string;
  public readonly processorRequestURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyMindProcessorResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#isStatusOk',
        tsPropertyName: 'statusOk',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindProcessorResponseTypeURI',
        tsPropertyName: 'haleyMindProcessorResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasErrorCode',
        tsPropertyName: 'errorCode',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier',
        tsPropertyName: 'haleyMindContextIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasErrorMessage',
        tsPropertyName: 'errorMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorRequestURI',
        tsPropertyName: 'processorRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
