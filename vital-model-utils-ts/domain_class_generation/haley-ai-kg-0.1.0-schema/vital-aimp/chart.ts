import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Chart
 */
export class Chart extends Card {
  public readonly chartData?: string;
  public readonly chartOptions?: string;
  public readonly chartType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Chart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChartData',
        tsPropertyName: 'chartData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChartOptions',
        tsPropertyName: 'chartOptions',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChartType',
        tsPropertyName: 'chartType',
        type: 'string',
        required: false
      }
    ];
  }


}
