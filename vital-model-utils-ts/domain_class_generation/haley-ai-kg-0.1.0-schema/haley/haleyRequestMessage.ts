import { UserCommandMessage } from '../vital-aimp/userCommandMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyRequestMessage
 */
export class HaleyRequestMessage extends UserCommandMessage {
  public readonly commandReceivedDateTime?: string | Date;
  public readonly commandProcessorReceivedDateTime?: string | Date;
  public readonly processorCommandConsumerPartitionAssignmentList?: string;
  public readonly commandChildSentDateTime?: string | Date;
  public readonly processorCommandEndDateTime?: string | Date;
  public readonly commandProcessorEndDateTime?: string | Date;
  public readonly commandChildReceivedDateTime?: string | Date;
  public readonly commandSentDateTime?: string | Date;
  public readonly processorCommandConsumerPartition?: string;
  public readonly commandChildEndDateTime?: string | Date;
  public readonly processorCommandConsumerID?: string;
  public readonly processorCommandSentDateTime?: string | Date;
  public readonly processorCommandReceivedDateTime?: string | Date;
  public readonly commandStartDateTime?: string | Date;
  public readonly commandProcessorSentDateTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyRequestMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandReceivedDateTime',
        tsPropertyName: 'commandReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandProcessorReceivedDateTime',
        tsPropertyName: 'commandProcessorReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerPartitionAssignmentList',
        tsPropertyName: 'processorCommandConsumerPartitionAssignmentList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildSentDateTime',
        tsPropertyName: 'commandChildSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandEndDateTime',
        tsPropertyName: 'processorCommandEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandProcessorEndDateTime',
        tsPropertyName: 'commandProcessorEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildReceivedDateTime',
        tsPropertyName: 'commandChildReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandSentDateTime',
        tsPropertyName: 'commandSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerPartition',
        tsPropertyName: 'processorCommandConsumerPartition',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandChildEndDateTime',
        tsPropertyName: 'commandChildEndDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerID',
        tsPropertyName: 'processorCommandConsumerID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandSentDateTime',
        tsPropertyName: 'processorCommandSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorCommandReceivedDateTime',
        tsPropertyName: 'processorCommandReceivedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandStartDateTime',
        tsPropertyName: 'commandStartDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCommandProcessorSentDateTime',
        tsPropertyName: 'commandProcessorSentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
