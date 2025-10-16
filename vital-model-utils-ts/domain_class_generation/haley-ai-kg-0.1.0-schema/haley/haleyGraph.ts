import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyGraph
 */
export class HaleyGraph extends VITAL_Node {
  /** URI reference to one of: VITAL_HyperEdge, VITAL_GraphContainerObject, VITAL_Edge, VITAL_Node, VITAL_HyperNode */
  public readonly memberURIs?: http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode;
  public readonly graphTypeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGraph
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasMemberURIs',
        tsPropertyName: 'memberURIs',
        type: 'http://vital.ai/ontology/vital-core#VITAL_HyperEdge | http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject | http://vital.ai/ontology/vital-core#VITAL_Edge | http://vital.ai/ontology/vital-core#VITAL_Node | http://vital.ai/ontology/vital-core#VITAL_HyperNode',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasGraphTypeURI',
        tsPropertyName: 'graphTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
