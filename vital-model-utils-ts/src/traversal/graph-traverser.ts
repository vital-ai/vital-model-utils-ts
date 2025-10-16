import { VitalSignsObject } from '../core/vital-signs-object.js';
import { VITAL_Node_Base } from '../core/vital-node-base.js';
import { VITAL_Edge_Base } from '../core/vital-edge-base.js';
import { VITAL_HyperNode_Base } from '../core/vital-hyper-node-base.js';
import { VITAL_HyperEdge_Base } from '../core/vital-hyper-edge-base.js';
import { VITAL_GraphContainerObject_Base } from '../core/vital-graph-container-object-base.js';
import {
  VitalSignsGraphInstance,
  VitalSignsTraversalOptions
} from '../types/graph.types.js';

/**
 * VitalSigns Graph Traverser
 */
export class VitalSignsGraphTraverser {
  constructor(private graph: VitalSignsGraphInstance) {}

  /**
   * Find nodes connected to a starting node
   */
  findConnectedNodes(
    startNodeURI: string,
    options: VitalSignsTraversalOptions = {}
  ): (VITAL_Node_Base | VITAL_HyperNode_Base | VITAL_GraphContainerObject_Base)[] {
    const {
      direction = 'both',
      edgeTypes,
      nodeTypes,
      maxDepth = 1,
      followHyperEdges = false
    } = options;

    const visited = new Set<string>();
    const result: (VITAL_Node_Base | VITAL_HyperNode_Base | VITAL_GraphContainerObject_Base)[] = [];
    const filters = options.filters || [];
    
    const node = this.graph.nodes.get(startNodeURI);
    if (node instanceof VITAL_Node_Base || node instanceof VITAL_HyperNode_Base || node instanceof VITAL_GraphContainerObject_Base) {
      const queue: Array<{ uri: string; depth: number }> = [{ uri: startNodeURI, depth: 0 }];

      while (queue.length > 0) {
        const { uri, depth } = queue.shift()!;
        if (visited.has(uri) || depth > maxDepth) {
          continue;
        }

        visited.add(uri);

        // Skip the starting node in results
        if (depth > 0) {
          const currentNode = this.graph.nodes.get(uri);
          if (currentNode && this.matchesNodeFilters(currentNode, nodeTypes, filters)) {
            result.push(currentNode);
          }
        }

        if (depth < maxDepth) {
          const connectedURIs = this.getConnectedNodeURIs(uri, direction, edgeTypes, followHyperEdges);
          for (const connectedURI of connectedURIs) {
            if (!visited.has(connectedURI)) {
              queue.push({ uri: connectedURI, depth: depth + 1 });
            }
          }
        }
      }
    }

    return result;
  }

  /**
   * Find path between two nodes
   */
  findPath(
    startURI: string,
    endURI: string,
    options: VitalSignsTraversalOptions = {}
  ): VitalSignsObject[] {
    const {
      direction = 'both',
      edgeTypes,
      maxDepth = 10,
      followHyperEdges = false
    } = options;

    const visited = new Set<string>();
    const queue: Array<{ uri: string; path: VitalSignsObject[]; depth: number }> = [
      { uri: startURI, path: [], depth: 0 }
    ];

    while (queue.length > 0) {
      const { uri, path, depth } = queue.shift()!;

      if (visited.has(uri) || depth > maxDepth) {
        continue;
      }

      visited.add(uri);

      const currentObject = this.graph.nodes.get(uri) || this.graph.edges.get(uri);
      if (!currentObject) {
        continue;
      }

      const currentPath = [...path, currentObject];

      if (uri === endURI) {
        return currentPath;
      }

      const connectedURIs = this.getConnectedNodeURIs(uri, direction, edgeTypes, followHyperEdges);
      for (const connectedURI of connectedURIs) {
        if (!visited.has(connectedURI)) {
          queue.push({ uri: connectedURI, path: currentPath, depth: depth + 1 });
        }
      }
    }

    return []; // No path found
  }

  /**
   * Find nodes with specific property values
   */
  findNodesWithProperty(
    propertyURI: string,
    value: any,
    nodeType?: string
  ): VitalSignsObject[] {
    const result: VitalSignsObject[] = [];

    // Search in nodes
    for (const node of this.graph.nodes.values()) {
      if (nodeType && node.vitaltype !== nodeType) {
        continue;
      }

      const json = node.toJSON();
      if (json[propertyURI] === value) {
        result.push(node);
      }
    }

    // Search in edges
    for (const edge of this.graph.edges.values()) {
      if (nodeType && edge.vitaltype !== nodeType) {
        continue;
      }

      const json = edge.toJSON();
      if (json[propertyURI] === value) {
        result.push(edge);
      }
    }

    return result;
  }

  /**
   * Find objects by VitalSigns type
   */
  findByVitalType(vitalType: string): VitalSignsObject[] {
    return this.graph.objectsByType.get(vitalType) || [];
  }

  /**
   * Get edges between two nodes
   */
  getEdgesBetween(
    sourceURI: string,
    destinationURI: string,
    edgeType?: string
  ): (VITAL_Edge_Base | VITAL_HyperEdge_Base)[] {
    const result: (VITAL_Edge_Base | VITAL_HyperEdge_Base)[] = [];

    for (const edge of this.graph.edges.values()) {
      if (edge.connects(sourceURI, destinationURI)) {
        if (!edgeType || edge.vitaltype === edgeType) {
          result.push(edge);
        }
      }
    }

    return result;
  }

  /**
   * Traverse hyper-edges
   */
  traverseHyperEdges(
    startURI: string
  ): VitalSignsObject[] {
    const result: VitalSignsObject[] = [];
    const visited = new Set<string>();

    const processHyperEdge = (hyperEdge: VITAL_HyperEdge_Base): void => {
      if (!hyperEdge.uri || visited.has(hyperEdge.uri)) {
        return;
      }

      visited.add(hyperEdge.uri);
      result.push(hyperEdge);

      // Follow to destination
      if (hyperEdge.hyperEdgeDestination) {
        const destNode = this.graph.nodes.get(hyperEdge.hyperEdgeDestination);
        if (destNode && destNode.uri && !visited.has(destNode.uri)) {
          visited.add(destNode.uri);
          result.push(destNode);
        }
      }

      // Follow to hyper-destination if exists
      if (hyperEdge.hyperEdgeDestination) {
        const hyperDestNode = this.graph.nodes.get(hyperEdge.hyperEdgeDestination);
        if (hyperDestNode && hyperDestNode.uri && !visited.has(hyperDestNode.uri)) {
          visited.add(hyperDestNode.uri);
          result.push(hyperDestNode);
        }
      }
    };

    // Find hyper-edges connected to start node
    for (const edge of this.graph.edges.values()) {
      if (edge instanceof VITAL_HyperEdge_Base && edge.isConnectedTo(startURI)) {
        processHyperEdge(edge);
      }
    }

    return result;
  }

  /**
   * Get statistics about the graph
   */
  getGraphStats(): {
    nodeCount: number;
    edgeCount: number;
    typeDistribution: Record<string, number>;
  } {
    const typeDistribution: Record<string, number> = {};

    for (const [vitalType, objects] of this.graph.objectsByType) {
      typeDistribution[vitalType] = objects.length;
    }

    return {
      nodeCount: this.graph.nodes.size,
      edgeCount: this.graph.edges.size,
      typeDistribution
    };
  }

  /**
   * Get connected node URIs for a given node
   */
  private getConnectedNodeURIs(
    nodeURI: string,
    direction: 'outgoing' | 'incoming' | 'both',
    edgeTypes?: string[],
    followHyperEdges?: boolean
  ): string[] {
    const connectedURIs: string[] = [];

    for (const edge of this.graph.edges.values()) {
      // Filter by edge type if specified
      if (edgeTypes && edge.vitaltype && !edgeTypes.includes(edge.vitaltype)) {
        continue;
      }

      let targetURI: string | null = null;

      // Handle regular edges
      if (edge instanceof VITAL_Edge_Base) {
        if (direction === 'outgoing' || direction === 'both') {
          if (edge.edgeSource === nodeURI) {
            targetURI = edge.edgeDestination || null;
          }
        }

        if (direction === 'incoming' || direction === 'both') {
          if (edge.edgeDestination === nodeURI) {
            targetURI = edge.edgeSource || null;
          }
        }
      }

      if (targetURI) {
        connectedURIs.push(targetURI);
      }

      // Handle hyper-edges
      if (followHyperEdges && edge instanceof VITAL_HyperEdge_Base) {
        if (direction === 'outgoing' || direction === 'both') {
          if (edge.hyperEdgeSource === nodeURI && edge.hyperEdgeDestination) {
            connectedURIs.push(edge.hyperEdgeDestination);
          }
        }
        if (direction === 'incoming' || direction === 'both') {
          if (edge.hyperEdgeDestination === nodeURI && edge.hyperEdgeSource) {
            connectedURIs.push(edge.hyperEdgeSource);
          }
        }
      }
    }

    return connectedURIs;
  }

  /**
   * Check if node matches filters
   */
  private matchesNodeFilters(
    node: VitalSignsObject,
    nodeTypes?: string[],
    filters?: any[]
  ): boolean {
    // Check node type filter
    if (nodeTypes && node.vitaltype && !nodeTypes.includes(node.vitaltype)) {
      return false;
    }

    // Check property filters (simplified implementation)
    if (filters && filters.length > 0) {
      // TODO: Implement property filtering
      return true;
    }

    return true;
  }
}
