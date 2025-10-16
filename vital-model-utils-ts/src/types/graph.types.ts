import { VitalSignsObject } from '../core/vital-signs-object.js';
import { VITAL_Node_Base } from '../core/vital-node-base.js';
import { VITAL_Edge_Base } from '../core/vital-edge-base.js';
import { VITAL_HyperNode_Base } from '../core/vital-hyper-node-base.js';
import { VITAL_HyperEdge_Base } from '../core/vital-hyper-edge-base.js';
import { VITAL_GraphContainerObject_Base } from '../core/vital-graph-container-object-base.js';

/**
 * Graph Instance with VitalSigns objects
 * Note: In practice, this will contain generated concrete classes that extend the base classes
 */
export interface VitalSignsGraphInstance {
  nodes: Map<string, VITAL_Node_Base | VITAL_HyperNode_Base | VITAL_GraphContainerObject_Base>;
  edges: Map<string, VITAL_Edge_Base | VITAL_HyperEdge_Base>;
  objectsByType: Map<string, VitalSignsObject[]>;
}

/**
 * Traversal options adapted for VitalSigns
 */
export interface VitalSignsTraversalOptions {
  direction?: 'outgoing' | 'incoming' | 'both';
  edgeTypes?: string[]; // vitaltype URIs
  nodeTypes?: string[]; // vitaltype URIs  
  filters?: VitalSignsPropertyFilter[];
  maxDepth?: number;
  followHyperEdges?: boolean;
}

/**
 * Property filter for VitalSigns properties
 */
export interface VitalSignsPropertyFilter {
  propertyURI: string; // Full URI like "http://vital.ai/ontology/vital-core#hasName"
  tsPropertyName?: string; // Mapped TS property name like "name"
  operator: 'equals' | 'contains' | 'startsWith' | 'gt' | 'lt' | 'in' | 'exists';
  value?: any;
}

/**
 * JSON-LD object format
 */
export interface JsonLDObject {
  '@id': string;
  '@type': string;
  [key: string]: any;
}

/**
 * VitalSigns JSON object format
 */
export interface VitalSignsJsonObject {
  'http://vital.ai/ontology/vital-core#vitaltype': string;
  [propertyURI: string]: any;
}

/**
 * Conversion result with metadata
 */
export interface ConversionResult<T extends VitalSignsObject> {
  instance: T;
  warnings: string[];
  unmappedProperties: string[];
}

/**
 * Graph traversal result
 */
export interface TraversalResult {
  nodes: VitalSignsObject[];
  edges: (VITAL_Edge_Base | VITAL_HyperEdge_Base)[];
  path?: VitalSignsObject[];
  depth: number;
}

/**
 * Class registry for dynamic instantiation
 */
export type VitalSignsClassRegistry = Map<string, new (uri: string, vitaltype: string, ...args: any[]) => VitalSignsObject>;

/**
 * Processing statistics
 */
export interface ProcessingStats {
  totalObjects: number;
  processedObjects: number;
  skippedObjects: number;
  errorObjects: number;
  processingTime: number;
  objectsByType: Record<string, number>;
}
