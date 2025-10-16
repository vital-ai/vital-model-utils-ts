import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDescriptor
 */
export class KGDescriptor extends VITAL_Node {
  public readonly kGDescriptorLanguageURI?: string;
  public readonly kGDescriptorLabel?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGDescriptor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLanguageURI',
        tsPropertyName: 'kGDescriptorLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDescriptorLabel',
        tsPropertyName: 'kGDescriptorLabel',
        type: 'string',
        required: false
      }
    ];
  }


}
