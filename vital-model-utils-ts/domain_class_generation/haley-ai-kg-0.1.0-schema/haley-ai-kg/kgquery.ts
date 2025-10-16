import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQuery
 */
export class KGQuery extends VITAL_Node {
  public readonly kGQueryJSON?: string;
  public readonly kGQueryIdentifier?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryJSON',
        tsPropertyName: 'kGQueryJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryIdentifier',
        tsPropertyName: 'kGQueryIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
