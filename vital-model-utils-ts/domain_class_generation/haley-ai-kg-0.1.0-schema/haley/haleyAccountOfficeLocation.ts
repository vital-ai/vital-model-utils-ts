import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountOfficeLocation
 */
export class HaleyAccountOfficeLocation extends VITAL_Node {
  public readonly officeLocationAddressPostalCode?: string;
  public readonly officeLocationAddressLine1?: string;
  public readonly officeLocationAddressCountry?: string;
  public readonly officeLocationAddressCity?: string;
  public readonly officeLocationAddressLine2?: string;
  public readonly officeLocationAddressProvince?: string;
  public readonly officeLocationAddressCounty?: string;
  public readonly officeLocationAddressState?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAccountOfficeLocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressPostalCode',
        tsPropertyName: 'officeLocationAddressPostalCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressLine1',
        tsPropertyName: 'officeLocationAddressLine1',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCountry',
        tsPropertyName: 'officeLocationAddressCountry',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCity',
        tsPropertyName: 'officeLocationAddressCity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressLine2',
        tsPropertyName: 'officeLocationAddressLine2',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressProvince',
        tsPropertyName: 'officeLocationAddressProvince',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCounty',
        tsPropertyName: 'officeLocationAddressCounty',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressState',
        tsPropertyName: 'officeLocationAddressState',
        type: 'string',
        required: false
      }
    ];
  }


}
