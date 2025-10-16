import { Bot } from './bot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BuilderStringBot
 */
export class BuilderStringBot extends Bot {
  public readonly builderString?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for BuilderStringBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBuilderString',
        tsPropertyName: 'builderString',
        type: 'string',
        required: false
      }
    ];
  }


}
