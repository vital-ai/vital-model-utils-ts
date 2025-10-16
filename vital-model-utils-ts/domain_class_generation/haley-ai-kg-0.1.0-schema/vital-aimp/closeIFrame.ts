import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CloseIFrame
 */
export class CloseIFrame extends Card {
  public readonly purgeSession?: boolean;
  public readonly endpointURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for CloseIFrame
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPurgeSession',
        tsPropertyName: 'purgeSession',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndpointURI',
        tsPropertyName: 'endpointURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
