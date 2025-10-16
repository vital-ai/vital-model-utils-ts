import { AIMPThing } from './aimpthing.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountOpportunity
 */
export class AccountOpportunity extends AIMPThing {
  public readonly accountOpportunityConvertDate?: string | Date;
  public readonly accountOpportunityStatusURI?: string;
  public readonly accountOpportunityIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountOpportunity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityConvertDate',
        tsPropertyName: 'accountOpportunityConvertDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityStatusURI',
        tsPropertyName: 'accountOpportunityStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountOpportunityIdentifier',
        tsPropertyName: 'accountOpportunityIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
