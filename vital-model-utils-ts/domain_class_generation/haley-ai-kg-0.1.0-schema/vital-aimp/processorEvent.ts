import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProcessorEvent
 */
export class ProcessorEvent extends VITAL_Node {
  public readonly processorEventJSON?: string;
  public readonly processorEventTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProcessorEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProcessorEventJSON',
        tsPropertyName: 'processorEventJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProcessorEventTypeURI',
        tsPropertyName: 'processorEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
