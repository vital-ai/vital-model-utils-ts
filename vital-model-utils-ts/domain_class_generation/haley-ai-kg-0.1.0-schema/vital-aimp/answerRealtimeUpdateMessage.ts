import { HaleyRealtimeMessage } from './haleyRealtimeMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnswerRealtimeUpdateMessage
 */
export class AnswerRealtimeUpdateMessage extends HaleyRealtimeMessage {
  public readonly propertyValue?: string;
  public readonly propertyName?: string;
  public readonly questionURI?: string;
  public readonly updateType?: string;
  public readonly updateContent?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AnswerRealtimeUpdateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionURI',
        tsPropertyName: 'questionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUpdateType',
        tsPropertyName: 'updateType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUpdateContent',
        tsPropertyName: 'updateContent',
        type: 'string',
        required: false
      }
    ];
  }


}
