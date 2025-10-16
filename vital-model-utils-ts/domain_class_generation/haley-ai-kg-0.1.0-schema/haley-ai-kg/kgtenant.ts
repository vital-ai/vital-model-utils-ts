import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTenant
 */
export class KGTenant extends VITAL_Node {
  public readonly kGGlobalTenant?: boolean;
  public readonly kGTenantIdentifier?: string;
  public readonly kGTenantAccountURI?: string;
  public readonly kGTenantAccountID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGTenant
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGGlobalTenant',
        tsPropertyName: 'kGGlobalTenant',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier',
        tsPropertyName: 'kGTenantIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountURI',
        tsPropertyName: 'kGTenantAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountID',
        tsPropertyName: 'kGTenantAccountID',
        type: 'string',
        required: false
      }
    ];
  }


}
