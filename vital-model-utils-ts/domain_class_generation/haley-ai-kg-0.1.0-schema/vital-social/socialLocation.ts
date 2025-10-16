import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#SocialLocation
 */
export class SocialLocation extends VITAL_Node {
  public readonly socialLocationRadius?: number;
  public readonly socialLocation?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SocialLocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLocationRadius',
        tsPropertyName: 'socialLocationRadius',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLocation',
        tsPropertyName: 'socialLocation',
        type: 'string',
        required: false
      }
    ];
  }


}
