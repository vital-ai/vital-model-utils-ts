import { KGServiceEvent } from './kgserviceEvent.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#MatrixServiceEvent
 */
export class MatrixServiceEvent extends KGServiceEvent {
  public readonly matrixServiceEventType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for MatrixServiceEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasMatrixServiceEventType',
        tsPropertyName: 'matrixServiceEventType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
