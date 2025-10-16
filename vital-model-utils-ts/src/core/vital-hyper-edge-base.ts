import { VitalSignsObject, VitalSignsPropertyDefinition } from './vital-signs-object.js';

/**
 * VITAL_HyperEdge_Base - foundational abstract base class for VitalSigns hyper-edges
 * The actual VITAL_HyperEdge class will be generated from the schema
 */
export abstract class VITAL_HyperEdge_Base extends VitalSignsObject {
  public hyperEdgeSource?: string;
  public hyperEdgeDestination?: string;

  constructor() {
    super();
  }

  /**
   * Get property definitions for VITAL_HyperEdge_Base
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasHyperEdgeSource',
        tsPropertyName: 'hyperEdgeSource',
        type: 'string',
        required: true
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasHyperEdgeDestination',
        tsPropertyName: 'hyperEdgeDestination',
        type: 'string',
      }
    ];
  }

  /**
   * Get the source URI of this hyper-edge
   */
  getHyperSource(): string {
    return this.hyperEdgeSource || '';
  }

  /**
   * Get the destination URI of this hyper-edge
   */
  getHyperDestination(): string {
    return this.hyperEdgeDestination || '';
  }

  /**
   * Check if this hyper-edge connects two specific nodes
   */
  connects(sourceURI: string, destinationURI: string): boolean {
    return this.getHyperSource() === sourceURI && this.getHyperDestination() === destinationURI;
    return this.hyperEdgeSource === sourceURI && this.hyperEdgeDestination === destinationURI;
  }

  /**
   * Check if this hyper-edge is connected to a specific node (as source or destination)
   */
  isConnectedTo(nodeURI: string): boolean {
    return this.hyperEdgeSource === nodeURI || this.hyperEdgeDestination === nodeURI;
  }
}
