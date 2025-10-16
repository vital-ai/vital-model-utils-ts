import { VitalDataScript } from './vitalDataScript.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Job
 */
export class Job extends VitalDataScript {
  public readonly interval?: number;
  public readonly callable?: boolean;
  public readonly paused?: boolean;
  public readonly intervalTimeUnit?: string;
  public readonly nextExecutionTime?: string | Date;
  public readonly cronExpression?: string;
  public readonly lastExecutionTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Job
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasInterval',
        tsPropertyName: 'interval',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isCallable',
        tsPropertyName: 'callable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isPaused',
        tsPropertyName: 'paused',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasIntervalTimeUnit',
        tsPropertyName: 'intervalTimeUnit',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasNextExecutionTime',
        tsPropertyName: 'nextExecutionTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasCronExpression',
        tsPropertyName: 'cronExpression',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastExecutionTime',
        tsPropertyName: 'lastExecutionTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
