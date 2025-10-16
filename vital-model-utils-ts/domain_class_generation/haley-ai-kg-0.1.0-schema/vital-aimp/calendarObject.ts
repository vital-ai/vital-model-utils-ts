import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarObject
 */
export class CalendarObject extends Card {
  public readonly calendars?: string;
  public readonly endDate?: string | Date;
  public readonly startDate?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CalendarObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCalendars',
        tsPropertyName: 'calendars',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndDate',
        tsPropertyName: 'endDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStartDate',
        tsPropertyName: 'startDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
