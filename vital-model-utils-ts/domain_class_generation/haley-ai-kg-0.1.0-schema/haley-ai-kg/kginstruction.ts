import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGInstruction
 */
export class KGInstruction extends KGNode {
  public readonly kGInstructionType?: string;
  public readonly kGInstructionText?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGInstruction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInstructionType',
        tsPropertyName: 'kGInstructionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInstructionText',
        tsPropertyName: 'kGInstructionText',
        type: 'string',
        required: false
      }
    ];
  }


}
