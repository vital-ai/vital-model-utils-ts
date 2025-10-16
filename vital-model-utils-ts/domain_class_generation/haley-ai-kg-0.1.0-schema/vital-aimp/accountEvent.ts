import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountEvent
 */
export class AccountEvent extends VITAL_Node {
  public readonly accountEventIdentifier?: string;
  public readonly accountEventAccountURI?: string;
  public readonly accountURI?: string;
  public readonly accountEventTypeURI?: string;
  public readonly accountEventLoginURI?: string;
  public readonly accountEventDateTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for AccountEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventIdentifier',
        tsPropertyName: 'accountEventIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventAccountURI',
        tsPropertyName: 'accountEventAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventTypeURI',
        tsPropertyName: 'accountEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventLoginURI',
        tsPropertyName: 'accountEventLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountEventDateTime',
        tsPropertyName: 'accountEventDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
