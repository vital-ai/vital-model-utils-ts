import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySet
 */
export class HaleySet extends VITAL_Node {
  /** URI reference to one of: VITAL_HyperEdge, VITAL_GraphContainerObject, VITAL_Edge, VITAL_Node, VITAL_HyperNode */
  public readonly haleySetMemberURIs?: http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleySet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleySetMemberURIs',
        tsPropertyName: 'haleySetMemberURIs',
        type: 'http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
