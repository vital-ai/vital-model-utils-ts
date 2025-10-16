import { Question } from './question.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TreeQuestion
 */
export class TreeQuestion extends Question {
  public readonly treeJson?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TreeQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTreeJson',
        tsPropertyName: 'treeJson',
        type: 'string',
        required: false
      }
    ];
  }


}
