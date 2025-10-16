import { HaleyTask } from './haleyTask.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#DialogTask
 */
export class DialogTask extends HaleyTask {
  public readonly entityURI?: string;
  public readonly dialogURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEntityURI',
        tsPropertyName: 'entityURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogURI',
        tsPropertyName: 'dialogURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
