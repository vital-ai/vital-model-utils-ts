import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyDomainMethod
 */
export class HaleyDomainMethod extends VITAL_Node {
  public readonly implementingGroovyClass?: string;
  public readonly domainMethodGroupURIs?: string;
  public readonly implementingGroovyMethod?: string;
  public readonly domainMethodGroupURI?: string;
  public readonly domainMethodContextType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDomainMethod
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasImplementingGroovyClass',
        tsPropertyName: 'implementingGroovyClass',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURIs',
        tsPropertyName: 'domainMethodGroupURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasImplementingGroovyMethod',
        tsPropertyName: 'implementingGroovyMethod',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDomainMethodGroupURI',
        tsPropertyName: 'domainMethodGroupURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDomainMethodContextType',
        tsPropertyName: 'domainMethodContextType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
