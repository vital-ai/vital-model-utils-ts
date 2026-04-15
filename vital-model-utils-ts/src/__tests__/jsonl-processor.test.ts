import { VitalSignsJsonlProcessor } from '../converters/jsonl-processor';
import { VitalSignsPropertyDefinition } from '../core/vital-signs-object';
import { VITAL_Node_Base } from '../core/vital-node-base';
import { VITAL_Edge_Base } from '../core/vital-edge-base';
import { VitalSignsClassRegistry, VitalSignsGraphInstance } from '../types/graph.types';

// Concrete test classes (abstract bases can't be instantiated directly)
class TestNode extends VITAL_Node_Base {
  public name?: string;

  constructor(uri?: string, vitaltype?: string) {
    super();
    if (uri) this.URI = uri;
    if (vitaltype) this.vitaltype = vitaltype;
  }

  override getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasName',
        tsPropertyName: 'name',
        type: 'string',
        required: false
      }
    ];
  }
}

class TestEdge extends VITAL_Edge_Base {
  constructor(uri?: string, vitaltype?: string) {
    super();
    if (uri) this.URI = uri;
    if (vitaltype) this.vitaltype = vitaltype;
  }

  override getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions()
    ];
  }
}

const NODE_TYPE = 'http://vital.ai/ontology/test#TestNode';
const EDGE_TYPE = 'http://vital.ai/ontology/test#TestEdge';

function createRegistry(): VitalSignsClassRegistry {
  const registry: VitalSignsClassRegistry = new Map();
  registry.set(NODE_TYPE, TestNode as any);
  registry.set(EDGE_TYPE, TestEdge as any);
  return registry;
}

describe('VitalSignsJsonlProcessor', () => {
  describe('processObjects', () => {
    it('should process an array of node JSON objects', () => {
      const registry = createRegistry();
      const objects = [
        { URI: 'urn:node1', type: NODE_TYPE, 'http://vital.ai/ontology/vital-core#hasName': 'Node 1' },
        { URI: 'urn:node2', type: NODE_TYPE, 'http://vital.ai/ontology/vital-core#hasName': 'Node 2' }
      ];

      const graph = VitalSignsJsonlProcessor.processObjects(objects, registry);

      expect(graph.nodes.size).toBe(2);
      expect(graph.nodes.get('urn:node1')).toBeInstanceOf(TestNode);
      expect(graph.nodes.get('urn:node2')).toBeInstanceOf(TestNode);
    });

    it('should process mixed nodes and edges', () => {
      const registry = createRegistry();
      const objects = [
        { URI: 'urn:node1', type: NODE_TYPE },
        { URI: 'urn:node2', type: NODE_TYPE },
        {
          URI: 'urn:edge1',
          type: EDGE_TYPE,
          'http://vital.ai/ontology/vital-core#hasEdgeSource': 'urn:node1',
          'http://vital.ai/ontology/vital-core#hasEdgeDestination': 'urn:node2'
        }
      ];

      const graph = VitalSignsJsonlProcessor.processObjects(objects, registry);

      expect(graph.nodes.size).toBe(2);
      expect(graph.edges.size).toBe(1);
      expect(graph.edges.get('urn:edge1')).toBeInstanceOf(TestEdge);
    });

    it('should skip objects without URI', () => {
      const registry = createRegistry();
      const objects = [
        { type: NODE_TYPE },
        { URI: 'urn:node1', type: NODE_TYPE }
      ];

      const graph = VitalSignsJsonlProcessor.processObjects(objects, registry);

      expect(graph.nodes.size).toBe(1);
    });

    it('should skip objects with unknown type', () => {
      const registry = createRegistry();
      const objects = [
        { URI: 'urn:unknown', type: 'http://vital.ai/ontology/test#UnknownType' },
        { URI: 'urn:node1', type: NODE_TYPE }
      ];

      const graph = VitalSignsJsonlProcessor.processObjects(objects, registry);

      expect(graph.nodes.size).toBe(1);
    });

    it('should populate objectsByType', () => {
      const registry = createRegistry();
      const objects = [
        { URI: 'urn:node1', type: NODE_TYPE },
        { URI: 'urn:node2', type: NODE_TYPE },
        { URI: 'urn:edge1', type: EDGE_TYPE, 'http://vital.ai/ontology/vital-core#hasEdgeSource': 'urn:node1', 'http://vital.ai/ontology/vital-core#hasEdgeDestination': 'urn:node2' }
      ];

      const graph = VitalSignsJsonlProcessor.processObjects(objects, registry);

      expect(graph.objectsByType.get(NODE_TYPE)?.length).toBe(2);
      expect(graph.objectsByType.get(EDGE_TYPE)?.length).toBe(1);
    });

    it('should return empty graph for empty array', () => {
      const registry = createRegistry();
      const graph = VitalSignsJsonlProcessor.processObjects([], registry);

      expect(graph.nodes.size).toBe(0);
      expect(graph.edges.size).toBe(0);
      expect(graph.objectsByType.size).toBe(0);
    });
  });

  describe('addToGraphInstance', () => {
    it('should add a node to the graph', () => {
      const graph: VitalSignsGraphInstance = {
        nodes: new Map(),
        edges: new Map(),
        objectsByType: new Map()
      };
      const node = new TestNode('urn:node1', NODE_TYPE);

      VitalSignsJsonlProcessor.addToGraphInstance(graph, node);

      expect(graph.nodes.size).toBe(1);
      expect(graph.nodes.get('urn:node1')).toBe(node);
      expect(graph.objectsByType.get(NODE_TYPE)?.length).toBe(1);
    });

    it('should add an edge to the graph', () => {
      const graph: VitalSignsGraphInstance = {
        nodes: new Map(),
        edges: new Map(),
        objectsByType: new Map()
      };
      const edge = new TestEdge('urn:edge1', EDGE_TYPE);
      edge.edgeSource = 'urn:node1';
      edge.edgeDestination = 'urn:node2';

      VitalSignsJsonlProcessor.addToGraphInstance(graph, edge);

      expect(graph.edges.size).toBe(1);
      expect(graph.edges.get('urn:edge1')).toBe(edge);
    });

    it('should accumulate objects of the same type', () => {
      const graph: VitalSignsGraphInstance = {
        nodes: new Map(),
        edges: new Map(),
        objectsByType: new Map()
      };

      VitalSignsJsonlProcessor.addToGraphInstance(graph, new TestNode('urn:n1', NODE_TYPE));
      VitalSignsJsonlProcessor.addToGraphInstance(graph, new TestNode('urn:n2', NODE_TYPE));
      VitalSignsJsonlProcessor.addToGraphInstance(graph, new TestNode('urn:n3', NODE_TYPE));

      expect(graph.nodes.size).toBe(3);
      expect(graph.objectsByType.get(NODE_TYPE)?.length).toBe(3);
    });
  });
});
