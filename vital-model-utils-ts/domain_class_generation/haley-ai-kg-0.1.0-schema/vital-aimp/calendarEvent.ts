import { AIMPThing } from './aimpthing.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarEvent
 */
export class CalendarEvent extends AIMPThing {
  public readonly endDate?: string | Date;
  public readonly locationString?: string;
  public readonly shortDescription?: string;
  public readonly startDate?: string | Date;
  public readonly fullDayEvent?: boolean;
  public readonly calendarURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CalendarEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndDate',
        tsPropertyName: 'endDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocationString',
        tsPropertyName: 'locationString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStartDate',
        tsPropertyName: 'startDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isFullDayEvent',
        tsPropertyName: 'fullDayEvent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCalendarURI',
        tsPropertyName: 'calendarURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
