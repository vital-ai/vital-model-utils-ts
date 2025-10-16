import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGStatsSummary
 */
export class KGStatsSummary extends KGNode {
  public readonly kGStatsSummaryCount?: number;
  public readonly kGStatsSummaryCountPercentage?: number;
  public readonly kGStatsSummaryPeriod?: string | Date;
  public readonly kGStatsSummaryType?: string;
  public readonly kGStatsSummaryPeriodMonth?: number;
  public readonly kGStatsSummaryPeriodYear?: number;
  public readonly kGStatsSummaryPeriodDay?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGStatsSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCount',
        tsPropertyName: 'kGStatsSummaryCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCountPercentage',
        tsPropertyName: 'kGStatsSummaryCountPercentage',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriod',
        tsPropertyName: 'kGStatsSummaryPeriod',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryType',
        tsPropertyName: 'kGStatsSummaryType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodMonth',
        tsPropertyName: 'kGStatsSummaryPeriodMonth',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodYear',
        tsPropertyName: 'kGStatsSummaryPeriodYear',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodDay',
        tsPropertyName: 'kGStatsSummaryPeriodDay',
        type: 'number',
        required: false
      }
    ];
  }


}
