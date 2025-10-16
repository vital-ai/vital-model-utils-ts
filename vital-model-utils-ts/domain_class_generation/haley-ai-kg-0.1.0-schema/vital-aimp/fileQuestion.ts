import { Question } from './question.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FileQuestion
 */
export class FileQuestion extends Question {
  public readonly maxFileLength?: number;
  public readonly fileScope?: string;
  public readonly fileTypeConstraint?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FileQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMaxFileLength',
        tsPropertyName: 'maxFileLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileScope',
        tsPropertyName: 'fileScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFileTypeConstraint',
        tsPropertyName: 'fileTypeConstraint',
        type: 'string',
        required: false
      }
    ];
  }


}
