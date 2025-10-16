import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Dataset
 */
export class Dataset extends VITAL_Node {
  public readonly dateRetrieved?: string | Date;
  public readonly sourceUrl?: string;
  public readonly sourceName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Dataset
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDateRetrieved',
        tsPropertyName: 'dateRetrieved',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSourceUrl',
        tsPropertyName: 'sourceUrl',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSourceName',
        tsPropertyName: 'sourceName',
        type: 'string',
        required: false
      }
    ];
  }


}
