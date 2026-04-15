import { VitalSignsGraphTraverser } from '../traversal/graph-traverser';
import { VitalSignsPropertyDefinition } from '../core/vital-signs-object';
import { VITAL_Node_Base } from '../core/vital-node-base';
import { VITAL_Edge_Base } from '../core/vital-edge-base';
import { VITAL_HyperEdge_Base } from '../core/vital-hyper-edge-base';
import { VitalSignsGraphInstance } from '../types/graph.types';

class TestNode extends VITAL_Node_Base {
  public name?: string;
  public score?: number;

  constructor(uri: string, vitaltype: string) {
    super();
    this.URI = uri;
    this.vitaltype = vitaltype;
  }

  override getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      { propertyURI: 'http://vital.ai/ontology/vital-core#hasName', tsPropertyName: 'name', type: 'string', required: false },
      { propertyURI: 'http://vital.ai/ontology/test#hasScore', tsPropertyName: 'score', type: 'number', required: false }
    ];
  }
}

class TestEdge extends VITAL_Edge_Base {
  constructor(uri: string, vitaltype: string, source: string, dest: string) {
    super();
    this.URI = uri;
    this.vitaltype = vitaltype;
    this.edgeSource = source;
    this.edgeDestination = dest;
  }

  override getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return super.getPropertyDefinitions();
  }
}

class TestHyperEdge extends VITAL_HyperEdge_Base {
  constructor(uri: string, vitaltype: string, source: string, dest: string) {
    super();
    this.URI = uri;
    this.vitaltype = vitaltype;
    this.hyperEdgeSource = source;
    this.hyperEdgeDestination = dest;
  }

  override getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return super.getPropertyDefinitions();
  }
}

const NODE_TYPE = 'http://vital.ai/ontology/test#TestNode';
const EDGE_TYPE = 'http://vital.ai/ontology/test#TestEdge';
const HYPER_EDGE_TYPE = 'http://vital.ai/ontology/test#TestHyperEdge';

function buildGraph(): { graph: VitalSignsGraphInstance; nodes: TestNode[] } {
  const n1 = new TestNode('urn:n1', NODE_TYPE);
  n1.name = 'Alice';
  n1.score = 90;

  const n2 = new TestNode('urn:n2', NODE_TYPE);
  n2.name = 'Bob';
  n2.score = 75;

  const n3 = new TestNode('urn:n3', NODE_TYPE);
  n3.name = 'Charlie';
  n3.score = 60;

  const e1 = new TestEdge('urn:e1', EDGE_TYPE, 'urn:n1', 'urn:n2');
  const e2 = new TestEdge('urn:e2', EDGE_TYPE, 'urn:n2', 'urn:n3');

  const graph: VitalSignsGraphInstance = {
    nodes: new Map([
      ['urn:n1', n1],
      ['urn:n2', n2],
      ['urn:n3', n3]
    ]),
    edges: new Map([
      ['urn:e1', e1],
      ['urn:e2', e2]
    ]),
    objectsByType: new Map([
      [NODE_TYPE, [n1, n2, n3]],
      [EDGE_TYPE, [e1, e2]]
    ])
  };

  return { graph, nodes: [n1, n2, n3] };
}

describe('VitalSignsGraphTraverser', () => {
  describe('property filtering via matchesNodeFilters', () => {
    it('should find connected nodes matching an equals filter', () => {
      const { graph } = buildGraph();
      const traverser = new VitalSignsGraphTraverser(graph);

      const results = traverser.findConnectedNodes('urn:n1', {
        direction: 'outgoing',
        filters: [
          { propertyURI: 'http://vital.ai/ontology/vital-core#hasName', operator: 'equals', value: 'Bob' }
        ]
      });

      expect(results.length).toBe(1);
      expect(results[0].URI).toBe('urn:n2');
    });

    it('should return empty when no nodes match the filter', () => {
      const { graph } = buildGraph();
      const traverser = new VitalSignsGraphTraverser(graph);

      const results = traverser.findConnectedNodes('urn:n1', {
        direction: 'outgoing',
        filters: [
          { propertyURI: 'http://vital.ai/ontology/vital-core#hasName', operator: 'equals', value: 'Nobody' }
        ]
      });

      expect(results.length).toBe(0);
    });

    it('should filter with gt operator on numeric property', () => {
      const { graph } = buildGraph();
      const traverser = new VitalSignsGraphTraverser(graph);

      const results = traverser.findConnectedNodes('urn:n1', {
        direction: 'outgoing',
        filters: [
          { propertyURI: 'http://vital.ai/ontology/test#hasScore', operator: 'gt', value: 70 }
        ]
      });

      // n2 has score 75, which is > 70
      expect(results.length).toBe(1);
      expect(results[0].URI).toBe('urn:n2');
    });

    it('should filter with exists operator', () => {
      const { graph } = buildGraph();
      const traverser = new VitalSignsGraphTraverser(graph);

      const results = traverser.findConnectedNodes('urn:n1', {
        direction: 'outgoing',
        filters: [
          { propertyURI: 'http://vital.ai/ontology/vital-core#hasName', operator: 'exists' }
        ]
      });

      expect(results.length).toBe(1);
      expect(results[0].URI).toBe('urn:n2');
    });

    it('should filter with contains operator on string property', () => {
      const { graph } = buildGraph();
      const traverser = new VitalSignsGraphTraverser(graph);

      const results = traverser.findConnectedNodes('urn:n2', {
        direction: 'outgoing',
        filters: [
          { propertyURI: 'http://vital.ai/ontology/vital-core#hasName', operator: 'contains', value: 'harl' }
        ]
      });

      expect(results.length).toBe(1);
      expect(results[0].URI).toBe('urn:n3');
    });
  });

  describe('traverseHyperEdges — recursive', () => {
    it('should recursively follow hyper-edges through destinations', () => {
      const n1 = new TestNode('urn:n1', NODE_TYPE);
      const n2 = new TestNode('urn:n2', NODE_TYPE);
      const n3 = new TestNode('urn:n3', NODE_TYPE);

      // Chain: n1 --he1--> n2 --he2--> n3
      const he1 = new TestHyperEdge('urn:he1', HYPER_EDGE_TYPE, 'urn:n1', 'urn:n2');
      const he2 = new TestHyperEdge('urn:he2', HYPER_EDGE_TYPE, 'urn:n2', 'urn:n3');

      const graph: VitalSignsGraphInstance = {
        nodes: new Map([['urn:n1', n1], ['urn:n2', n2], ['urn:n3', n3]]),
        edges: new Map([['urn:he1', he1], ['urn:he2', he2]]),
        objectsByType: new Map()
      };

      const traverser = new VitalSignsGraphTraverser(graph);
      const results = traverser.traverseHyperEdges('urn:n1');

      // Should contain: he1, n2, he2, n3
      const uris = results.map(r => r.URI);
      expect(uris).toContain('urn:he1');
      expect(uris).toContain('urn:n2');
      expect(uris).toContain('urn:he2');
      expect(uris).toContain('urn:n3');
    });

    it('should handle cycles without infinite loop', () => {
      const n1 = new TestNode('urn:n1', NODE_TYPE);
      const n2 = new TestNode('urn:n2', NODE_TYPE);

      // Cycle: n1 --he1--> n2 --he2--> n1
      const he1 = new TestHyperEdge('urn:he1', HYPER_EDGE_TYPE, 'urn:n1', 'urn:n2');
      const he2 = new TestHyperEdge('urn:he2', HYPER_EDGE_TYPE, 'urn:n2', 'urn:n1');

      const graph: VitalSignsGraphInstance = {
        nodes: new Map([['urn:n1', n1], ['urn:n2', n2]]),
        edges: new Map([['urn:he1', he1], ['urn:he2', he2]]),
        objectsByType: new Map()
      };

      const traverser = new VitalSignsGraphTraverser(graph);
      const results = traverser.traverseHyperEdges('urn:n1');

      // Should not infinite loop; visited set prevents it
      const uris = results.map(r => r.URI);
      expect(uris).toContain('urn:he1');
      expect(uris).toContain('urn:n2');
      expect(uris).toContain('urn:he2');
      // n1 is the start node, not added to results by current implementation
    });

    it('should return only direct results when no chain exists', () => {
      const n1 = new TestNode('urn:n1', NODE_TYPE);
      const n2 = new TestNode('urn:n2', NODE_TYPE);

      const he1 = new TestHyperEdge('urn:he1', HYPER_EDGE_TYPE, 'urn:n1', 'urn:n2');

      const graph: VitalSignsGraphInstance = {
        nodes: new Map([['urn:n1', n1], ['urn:n2', n2]]),
        edges: new Map([['urn:he1', he1]]),
        objectsByType: new Map()
      };

      const traverser = new VitalSignsGraphTraverser(graph);
      const results = traverser.traverseHyperEdges('urn:n1');

      expect(results.length).toBe(2); // he1 + n2
      expect(results[0].URI).toBe('urn:he1');
      expect(results[1].URI).toBe('urn:n2');
    });
  });
});
