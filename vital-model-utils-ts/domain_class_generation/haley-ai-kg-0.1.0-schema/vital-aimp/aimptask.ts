import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPTask
 */
export class AIMPTask extends VITAL_Node {
  public readonly aIMPMessageContentURI?: string;
  public readonly chatTaskEndDateTime?: string | Date;
  public readonly chatTaskDeltaTime?: number;
  public readonly chatTotalTokenCount?: number;
  public readonly aIMPTaskStatusURI?: string;
  public readonly aIMPTaskTypeURI?: string;
  public readonly daylightSavingsTime?: boolean;
  public readonly chatTaskStartDateTime?: string | Date;
  public readonly chatTaskStagesJSON?: string;
  public readonly chatPromptTokenCount?: number;
  public readonly timezone?: string;
  public readonly chatTaskUpdateDateTime?: string | Date;
  public readonly aIMPTaskProgressURI?: string;
  public readonly messageURI?: string;
  public readonly chatCompletionTokenCount?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AIMPTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContentURI',
        tsPropertyName: 'aIMPMessageContentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatTaskEndDateTime',
        tsPropertyName: 'chatTaskEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatTaskDeltaTime',
        tsPropertyName: 'chatTaskDeltaTime',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatTotalTokenCount',
        tsPropertyName: 'chatTotalTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPTaskStatusURI',
        tsPropertyName: 'aIMPTaskStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPTaskTypeURI',
        tsPropertyName: 'aIMPTaskTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDaylightSavingsTime',
        tsPropertyName: 'daylightSavingsTime',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatTaskStartDateTime',
        tsPropertyName: 'chatTaskStartDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatTaskStagesJSON',
        tsPropertyName: 'chatTaskStagesJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatPromptTokenCount',
        tsPropertyName: 'chatPromptTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimezone',
        tsPropertyName: 'timezone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatTaskUpdateDateTime',
        tsPropertyName: 'chatTaskUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPTaskProgressURI',
        tsPropertyName: 'aIMPTaskProgressURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageURI',
        tsPropertyName: 'messageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatCompletionTokenCount',
        tsPropertyName: 'chatCompletionTokenCount',
        type: 'number',
        required: false
      }
    ];
  }


}
