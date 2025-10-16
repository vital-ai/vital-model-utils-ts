import { VITAL_Fact } from './vitalFact.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#ErrorFact
 */
export class ErrorFact extends VITAL_Fact {
  public readonly errorMessage?: string;
  public readonly errorType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ErrorFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasErrorMessage',
        tsPropertyName: 'errorMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasErrorType',
        tsPropertyName: 'errorType',
        type: 'string',
        required: false
      }
    ];
  }


}
