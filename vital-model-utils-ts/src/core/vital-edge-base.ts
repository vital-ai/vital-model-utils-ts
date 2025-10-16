import { VitalSignsObject, VitalSignsPropertyDefinition } from './vital-signs-object.js';

/**
 * VITAL_Edge_Base - foundational abstract base class for all VitalSigns edges
 * The actual VITAL_Edge class will be generated from the schema
 */
export abstract class VITAL_Edge_Base extends VitalSignsObject {
  public edgeSource?: string;
  public edgeDestination?: string;

  constructor() {
    super();
  }

  /**
   * Get property definitions for VITAL_Edge_Base
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEdgeSource',
        tsPropertyName: 'edgeSource',
        type: 'string',
        required: true
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEdgeDestination',
        tsPropertyName: 'edgeDestination',
        type: 'string',
        required: true
      }
    ];
  }


  /**
   * Get the source URI of this edge
   */
  getSource(): string {
    return this.edgeSource || '';
  }

  /**
   * Get the destination URI of this edge
   */
  getDestination(): string {
    return this.edgeDestination || '';
  }

  /**
   * Check if this edge connects two specific nodes
   */
  connects(sourceURI: string, destinationURI: string): boolean {
    return this.edgeSource === sourceURI && this.edgeDestination === destinationURI;
  }

  /**
   * Check if this edge is connected to a specific node (as source or destination)
   */
  isConnectedTo(nodeURI: string): boolean {
    return this.edgeSource === nodeURI || this.edgeDestination === nodeURI;
  }

}
