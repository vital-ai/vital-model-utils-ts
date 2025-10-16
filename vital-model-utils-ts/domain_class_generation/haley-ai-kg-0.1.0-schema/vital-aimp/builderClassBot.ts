import { Bot } from './bot.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BuilderClassBot
 */
export class BuilderClassBot extends Bot {
  public readonly builderClass?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for BuilderClassBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBuilderClass',
        tsPropertyName: 'builderClass',
        type: 'string',
        required: false
      }
    ];
  }


}
