import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunityEvent
 */
export class AccountOpportunityEvent extends VITAL_Node {
  public readonly accountOpportunityEventTypeURI?: string;
  public readonly accountOpportunityEventDateTime?: string | Date;
  public readonly accountOpportunityEventIdentifier?: string;
  public readonly accountOpportunityURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountOpportunityEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityEventTypeURI',
        tsPropertyName: 'accountOpportunityEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityEventDateTime',
        tsPropertyName: 'accountOpportunityEventDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityEventIdentifier',
        tsPropertyName: 'accountOpportunityEventIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityURI',
        tsPropertyName: 'accountOpportunityURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
