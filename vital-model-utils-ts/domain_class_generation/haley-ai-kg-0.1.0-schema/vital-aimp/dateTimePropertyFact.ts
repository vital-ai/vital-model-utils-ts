import { PropertyFact } from './propertyFact.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DateTimePropertyFact
 */
export class DateTimePropertyFact extends PropertyFact {
  public readonly dateValue?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DateTimePropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDateValue',
        tsPropertyName: 'dateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
