import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyTask
 */
export class HaleyTask extends VITAL_Node {
  public readonly stackTrace?: string;
  public readonly scheduledExecutionTime?: string | Date;
  public readonly owner?: string;
  public readonly status?: string;
  public readonly exceptionMessage?: string;
  public readonly statusMessage?: string;
  public readonly topPriority?: boolean;
  public readonly lastAttemptTime?: string | Date;
  public readonly defaultRecurrenceTime?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStackTrace',
        tsPropertyName: 'stackTrace',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasScheduledExecutionTime',
        tsPropertyName: 'scheduledExecutionTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOwner',
        tsPropertyName: 'owner',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasExceptionMessage',
        tsPropertyName: 'exceptionMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusMessage',
        tsPropertyName: 'statusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isTopPriority',
        tsPropertyName: 'topPriority',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasLastAttemptTime',
        tsPropertyName: 'lastAttemptTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDefaultRecurrenceTime',
        tsPropertyName: 'defaultRecurrenceTime',
        type: 'number',
        required: false
      }
    ];
  }


}
