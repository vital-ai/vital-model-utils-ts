import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGPointer
 */
export class KGPointer extends VITAL_Node {
  /** URI reference to one of: Edge_hasKGEdge, KGNode */
  public readonly kGPointerURI?: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge | http://vital.ai/ontology/haley-ai-kg#KGNode;
  /** URI reference to one of: Edge_hasKGEdge, KGNode */
  public readonly kGPointerNextURI?: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge | http://vital.ai/ontology/haley-ai-kg#KGNode;
  /** URI reference to one of: Edge_hasKGEdge, KGNode */
  public readonly kGPointerPriorURI?: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge | http://vital.ai/ontology/haley-ai-kg#KGNode;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGPointer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPointerURI',
        tsPropertyName: 'kGPointerURI',
        type: 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge | http://vital.ai/ontology/haley-ai-kg#KGNode',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPointerNextURI',
        tsPropertyName: 'kGPointerNextURI',
        type: 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge | http://vital.ai/ontology/haley-ai-kg#KGNode',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPointerPriorURI',
        tsPropertyName: 'kGPointerPriorURI',
        type: 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge | http://vital.ai/ontology/haley-ai-kg#KGNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
