import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTask
 */
export class KGTask extends KGNode {
  public readonly kGTaskType?: string;
  public readonly kGTaskStatusURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaskType',
        tsPropertyName: 'kGTaskType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaskStatusURI',
        tsPropertyName: 'kGTaskStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
