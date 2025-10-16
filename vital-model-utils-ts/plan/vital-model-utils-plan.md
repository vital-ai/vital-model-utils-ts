# Vital Model Utils TypeScript Library - Implementation Plan

## Project Overview
A TypeScript library for converting JSON schemas to TypeScript classes with utilities for object conversion, JSONL processing, and graph traversal. Designed for both frontend (React) and backend (Node.js) environments.

## Core Features
1. **Schema-to-Class Generation**: Convert JSON schemas to TypeScript classes
2. **Object Conversion**: Bidirectional conversion between JSON and class instances
3. **JSONL Processing**: Convert JSONL files to class instances
4. **Graph Traversal**: Navigate node-edge relationships with filtering capabilities

## Phase 1: Project Setup & Infrastructure

### 1.1 Modern TypeScript Project Structure
```
vital-model-utils-ts/
├── src/
│   ├── core/
│   │   ├── base-node.ts
│   │   ├── base-edge.ts
│   │   └── index.ts
│   ├── generators/
│   │   ├── class-generator.ts
│   │   ├── template-engine.ts
│   │   └── index.ts
│   ├── converters/
│   │   ├── json-converter.ts
│   │   ├── jsonl-processor.ts
│   │   └── index.ts
│   ├── traversal/
│   │   ├── graph-traverser.ts
│   │   ├── filter-engine.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── schema.types.ts
│   │   ├── graph.types.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── validation.ts
│   │   ├── helpers.ts
│   │   └── index.ts
│   └── index.ts
├── dist/                    # Compiled output
├── examples/               # Usage examples
├── tests/                  # Test files
├── docs/                   # Documentation
├── scripts/                # Build and utility scripts
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── jest.config.js
├── .eslintrc.js
├── .prettierrc
├── rollup.config.js        # For bundling
└── README.md
```

### 1.2 Package Configuration
- **Build System**: Rollup for bundling, TypeScript for compilation
- **Testing**: Jest with TypeScript support
- **Linting**: ESLint + Prettier
- **Documentation**: TypeDoc
- **CI/CD**: GitHub Actions for automated testing and publishing

### 1.3 Dependencies
```json
{
  "dependencies": {
    "ajv": "^8.12.0",
    "json-schema-to-typescript": "^13.1.1",
    "handlebars": "^4.7.8"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0",
    "prettier": "^3.0.0",
    "rollup": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Phase 2: Core Architecture

### 2.1 VitalSigns Base Classes Design
Based on the actual schema analysis, the library will work with the VitalSigns ontology structure:

```typescript
// Base VitalSigns Object - common ancestor
abstract class VitalSignsObject {
  public readonly uri: string;
  public readonly vitaltype: string;
  public readonly timestamp?: number;
  public readonly name?: string;
  public readonly active?: boolean;
  public readonly updateTime?: number;
  
  constructor(uri: string, vitaltype: string) {
    this.uri = uri;
    this.vitaltype = vitaltype;
  }
  
  abstract toJSON(): Record<string, any>;
  abstract fromJSON(data: Record<string, any>): void;
}

// VITAL_Node - base class for all nodes
abstract class VITAL_Node extends VitalSignsObject {
  public readonly degree?: number;
  public readonly pageRank?: number;
  public readonly certainty?: number;
  // ... many other VitalSigns properties
  
  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);
  }
}

// VITAL_Edge - base class for all edges  
abstract class VITAL_Edge extends VitalSignsObject {
  public readonly edgeSource: string;
  public readonly edgeDestination: string;
  public readonly listIndex?: number;
  
  constructor(uri: string, vitaltype: string, edgeSource: string, edgeDestination: string) {
    super(uri, vitaltype);
    this.edgeSource = edgeSource;
    this.edgeDestination = edgeDestination;
  }
}

// VITAL_HyperNode - extended node type
abstract class VITAL_HyperNode extends VITAL_Node {
  // Additional hyper-node specific properties
}

// VITAL_HyperEdge - extended edge type  
abstract class VITAL_HyperEdge extends VITAL_Edge {
  public readonly hyperEdgeDestination?: string;
  // Additional hyper-edge specific properties
}

// VITAL_GraphContainerObject - container for graph objects
abstract class VITAL_GraphContainerObject extends VitalSignsObject {
  // Container-specific properties
}
```

### 2.2 VitalSigns Type System
```typescript
// VitalSigns Schema Definition
interface VitalSignsSchema {
  $schema: string;
  title: string;
  domainURI: string;
  name: string;
  version: string;
  typeScriptConfig: {
    namespace: string;
    exportFormat: 'interface' | 'class';
    generateUnionTypes: boolean;
    unionTypeStrategy: 'branded-strings' | 'literal';
  };
  $defs: Record<string, JSONSchema>;
}

// Graph Instance with VitalSigns objects
interface VitalSignsGraphInstance {
  nodes: Map<string, VITAL_Node | VITAL_HyperNode | VITAL_GraphContainerObject>;
  edges: Map<string, VITAL_Edge | VITAL_HyperEdge>;
  objectsByType: Map<string, VitalSignsObject[]>;
}

// Traversal options adapted for VitalSigns
interface VitalSignsTraversalOptions {
  direction?: 'outgoing' | 'incoming' | 'both';
  edgeTypes?: string[]; // vitaltype URIs
  nodeTypes?: string[]; // vitaltype URIs  
  filters?: VitalSignsPropertyFilter[];
  maxDepth?: number;
  followHyperEdges?: boolean;
}

// Property filter for VitalSigns properties
interface VitalSignsPropertyFilter {
  propertyURI: string; // Full URI like "http://vital.ai/ontology/vital-core#hasName"
  tsPropertyName?: string; // Mapped TS property name like "name"
  operator: 'equals' | 'contains' | 'startsWith' | 'gt' | 'lt' | 'in' | 'exists';
  value?: any;
}
```

## Phase 3: Schema-to-Class Generation

### 3.1 VitalSigns Class Generator Engine
- Parse VitalSigns JSON schema files with $defs structure
- Generate TypeScript class definitions extending VitalSigns base classes
- Handle allOf inheritance patterns from JSON Schema
- Map URI-based property names to TypeScript property names using tsPropertyName
- Generate proper type annotations including union types with branded strings
- Support for VitalSigns-specific features:
  - vitaltype property for runtime type identification
  - URI-based property system
  - Timestamp and versioning properties
  - Access control and security properties

### 3.2 VitalSigns Template System
- Handlebars templates optimized for VitalSigns class generation
- Support for VitalSigns inheritance hierarchy (VITAL_Node, VITAL_Edge, etc.)
- Generate proper constructor signatures with required VitalSigns properties
- Template for URI-to-TypeScript property mapping methods
- Generate branded union types for type safety
- Support for both interface and class generation modes
- Generate index files with proper VitalSigns namespace organization

### 3.3 VitalSigns CLI Tool
```bash
# Generate classes from VitalSigns schema
npx vital-model-utils generate --schema haley-ai-kg-0.1.0-schema.json --output ./src/models

# Options:
--format class|interface    # Output format (default: class)
--namespace MyNamespace     # Override TypeScript namespace
--base-only                 # Generate only base VitalSigns classes
--include-types "KGNode,KGEdge"  # Generate only specific types
--exclude-types "Internal*"     # Exclude types matching pattern
```

## Phase 4: JSON-LD and VitalSigns Conversion Utilities

### 4.0 JSON-LD Format Support
Based on the instances.jsonl analysis, the library must handle both JSON-LD and VitalSigns JSON formats:

**JSON-LD Format (from instances.jsonl):**
- Uses `@id` for URI identifiers
- Uses `@type` for type identification  
- Property values can be arrays even for single values
- Includes RDF properties like `http://www.w3.org/2000/01/rdf-schema#comment`

**VitalSigns JSON Format (from schema):**
- Uses full URI property names like `http://vital.ai/ontology/vital-core#vitaltype`
- Maps to TypeScript properties via `tsPropertyName`
- Standard JSON structure without @id/@type

**Conversion Strategy:**
1. Auto-detect format based on presence of @id/@type vs vitaltype
2. Normalize JSON-LD to VitalSigns JSON format internally
3. Support bidirectional conversion between formats
4. Handle array property normalization

### 4.1 VitalSigns JSON-LD to Instance Converter
```typescript
class VitalSignsConverter {
  static toInstance<T extends VitalSignsObject>(
    jsonLD: Record<string, any>, 
    ClassConstructor: new (...args: any[]) => T,
    schema?: JSONSchema
  ): T;
  
  static fromInstance(instance: VitalSignsObject): Record<string, any>;
  
  // Auto-detect type from @type property in JSON-LD
  static autoDetectType(jsonLD: Record<string, any>): string | null;
  
  static validateAgainstSchema(json: Record<string, any>, schema: JSONSchema): boolean;
  
  // JSON-LD specific conversion methods
  static fromJsonLD(jsonLD: Record<string, any>): Record<string, any>;
  static toJsonLD(vitalSignsJson: Record<string, any>): Record<string, any>;
  
  // Handle @id/@type mapping to uri/vitaltype
  static mapJsonLDToVitalSigns(jsonLD: Record<string, any>): Record<string, any>;
  static mapVitalSignsToJsonLD(vitalSigns: Record<string, any>): Record<string, any>;
  
  // Convert URI-based properties to TypeScript property names
  static mapPropertiesToTS(json: Record<string, any>, schema: JSONSchema): Record<string, any>;
  
  // Convert TypeScript properties back to URI-based properties
  static mapPropertiesFromTS(obj: Record<string, any>, schema: JSONSchema): Record<string, any>;
  
  // Handle array property values (JSON-LD can have single values as arrays)
  static normalizePropertyValues(json: Record<string, any>): Record<string, any>;
}
```

### 4.2 VitalSigns JSON-LD JSONL Processor
```typescript
class VitalSignsJsonlProcessor {
  static async processFile(
    filePath: string,
    schema: VitalSignsSchema,
    classRegistry: Map<string, typeof VitalSignsObject>
  ): Promise<VitalSignsGraphInstance>;
  
  static async processStream(
    stream: ReadableStream,
    schema: VitalSignsSchema,
    classRegistry: Map<string, typeof VitalSignsObject>
  ): Promise<VitalSignsObject[]>;
  
  // Auto-detect object types from @type property in JSON-LD
  static async processJsonLDFile(
    filePath: string,
    schema: VitalSignsSchema
  ): Promise<VitalSignsGraphInstance>;
  
  // Process mixed JSON-LD and VitalSigns JSON formats
  static async processFileWithAutoDetection(
    filePath: string,
    schema: VitalSignsSchema,
    format?: 'json-ld' | 'vitalsigns' | 'auto'
  ): Promise<VitalSignsGraphInstance>;
  
  // Handle enumeration/constant instances (most common in instances.jsonl)
  static async processEnumerationInstances(
    filePath: string,
    schema: VitalSignsSchema
  ): Promise<Map<string, VitalSignsObject>>;
}
```

## Phase 5: Graph Traversal System

### 5.1 VitalSigns Graph Traverser
```typescript
class VitalSignsGraphTraverser {
  constructor(private graph: VitalSignsGraphInstance) {}
  
  findConnectedNodes(
    startNodeURI: string,
    options?: VitalSignsTraversalOptions
  ): (VITAL_Node | VITAL_HyperNode | VITAL_GraphContainerObject)[];
  
  findPath(
    startURI: string,
    endURI: string,
    options?: VitalSignsTraversalOptions
  ): VitalSignsObject[];
  
  findNodesWithProperty(
    propertyURI: string,
    value: any,
    nodeType?: string
  ): VitalSignsObject[];
  
  // VitalSigns-specific traversal methods
  findByVitalType(vitalType: string): VitalSignsObject[];
  
  getEdgesBetween(
    sourceURI: string, 
    destinationURI: string,
    edgeType?: string
  ): (VITAL_Edge | VITAL_HyperEdge)[];
  
  traverseHyperEdges(
    startURI: string,
    options?: VitalSignsTraversalOptions
  ): VitalSignsObject[];
}
```

### 5.2 VitalSigns Filter Engine
```typescript
class VitalSignsFilterEngine {
  static applyFilters(
    objects: VitalSignsObject[], 
    filters: VitalSignsPropertyFilter[]
  ): VitalSignsObject[];
  
  static createFilter(
    propertyURI: string, 
    operator: string, 
    value: any
  ): VitalSignsPropertyFilter;
  
  // VitalSigns-specific filtering
  static filterByVitalType(
    objects: VitalSignsObject[], 
    vitalTypes: string[]
  ): VitalSignsObject[];
  
  static filterByTimestamp(
    objects: VitalSignsObject[],
    startTime?: number,
    endTime?: number
  ): VitalSignsObject[];
  
  static filterByActive(
    objects: VitalSignsObject[],
    activeOnly: boolean = true
  ): VitalSignsObject[];
}
```

## Phase 6: Testing Strategy

### 6.1 Unit Tests
- Test each component in isolation
- Mock external dependencies
- Cover edge cases and error scenarios

### 6.2 Integration Tests
- End-to-end workflow testing
- Real JSON schema processing
- JSONL file processing
- Graph traversal scenarios

### 6.3 Performance Tests
- Large dataset processing
- Memory usage optimization
- Traversal performance benchmarks

## Phase 7: Documentation & Examples

### 7.1 API Documentation
- TypeDoc generated documentation
- Comprehensive API reference
- Usage examples for each feature

### 7.2 VitalSigns Usage Examples
```typescript
// Example: Basic VitalSigns usage with JSON-LD support
import { 
  generateVitalSignsClasses, 
  VitalSignsConverter, 
  VitalSignsGraphTraverser,
  VitalSignsJsonlProcessor 
} from 'vital-model-utils';

// Generate classes from VitalSigns schema
await generateVitalSignsClasses(
  './domain_schema/haley-ai-kg-0.1.0-schema.json', 
  './src/models'
);

// Import generated classes
import { KGNode, Edge_hasKGEdge, KGActionStatus } from './src/models';

// Convert JSON-LD to VitalSigns instances (from instances.jsonl format)
const jsonLDData = {
  "@id": "http://vital.ai/ontology/haley-ai-kg#KGActionStatus_OK",
  "@type": "http://vital.ai/ontology/haley-ai-kg#KGActionStatus"
};

const statusInstance = VitalSignsConverter.toInstance(jsonLDData, KGActionStatus);
console.log(statusInstance.uri); // "http://vital.ai/ontology/haley-ai-kg#KGActionStatus_OK"
console.log(statusInstance.vitaltype); // "http://vital.ai/ontology/haley-ai-kg#KGActionStatus"

// Convert VitalSigns JSON to instances
const kgNodeData = {
  "http://vital.ai/ontology/vital-core#vitaltype": "http://vital.ai/ontology/haley-ai-kg#KGNode",
  "http://vital.ai/ontology/vital-core#hasName": "My Knowledge Graph Node",
  "http://vital.ai/ontology/haley-ai-kg#hasKGIdentifier": "kg-123"
};

const nodeInstance = VitalSignsConverter.toInstance(kgNodeData, KGNode);
console.log(nodeInstance.name); // "My Knowledge Graph Node"
console.log(nodeInstance.kGIdentifier); // "kg-123"

// Process JSON-LD JSONL file (like instances.jsonl)
const enumerationInstances = await VitalSignsJsonlProcessor.processJsonLDFile(
  './domain_schema/haley-ai-kg-0.1.0-instances.jsonl',
  schema
);

// Process mixed format JSONL file with graph data
const graphInstance = await VitalSignsJsonlProcessor.processFileWithAutoDetection(
  './data/knowledge-graph.jsonl',
  schema,
  'auto' // Automatically detect JSON-LD vs VitalSigns JSON format
);

// Traverse VitalSigns graph
const traverser = new VitalSignsGraphTraverser(graphInstance);
const connectedNodes = traverser.findConnectedNodes('urn:node-123', {
  direction: 'outgoing',
  edgeTypes: ['http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge'],
  maxDepth: 2
});

// Filter by VitalSigns properties
const activeNodes = traverser.findNodesWithProperty(
  'http://vital.ai/ontology/vital-core#isActive',
  true,
  'http://vital.ai/ontology/haley-ai-kg#KGNode'
);

// Find by VitalSigns type
const allKGNodes = traverser.findByVitalType(
  'http://vital.ai/ontology/haley-ai-kg#KGNode'
);

// Access enumeration instances
const okStatus = enumerationInstances.nodes.get(
  'http://vital.ai/ontology/haley-ai-kg#KGActionStatus_OK'
);
```

## Phase 8: Build & Distribution

### 8.1 Build Configuration
- Multiple output formats (ESM, CJS, UMD)
- Tree-shaking support
- Minified production builds
- Source maps for debugging

### 8.2 NPM Package Setup
- Proper package.json configuration
- Semantic versioning
- Automated publishing pipeline
- Bundle size optimization

## Phase 9: Advanced Features (Future)

### 9.1 Schema Validation
- Runtime schema validation
- Custom validation rules
- Validation error reporting

### 9.2 Performance Optimizations
- Lazy loading of large datasets
- Indexed graph structures
- Caching mechanisms

### 9.3 Additional Utilities
- Graph visualization helpers
- Export/import utilities
- Schema migration tools

## Implementation Timeline

1. **Week 1-2**: Project setup, base architecture, and core types
2. **Week 3-4**: Schema-to-class generation engine
3. **Week 5-6**: JSON conversion utilities and JSONL processing
4. **Week 7-8**: Graph traversal system
5. **Week 9-10**: Testing, documentation, and examples
6. **Week 11-12**: Build system, packaging, and initial release

## Success Criteria

- ✅ Generate TypeScript classes from VitalSigns JSON schemas with proper inheritance
- ✅ Handle VitalSigns-specific features (vitaltype, URI properties, branded unions)
- ✅ Convert between VitalSigns JSON and class instances bidirectionally
- ✅ Process JSONL files containing VitalSigns objects into graph instances
- ✅ Traverse VitalSigns graph relationships using edgeSource/edgeDestination
- ✅ Support VitalSigns filtering by properties, types, and timestamps
- ✅ Handle HyperNodes and HyperEdges correctly
- ✅ Work seamlessly in both React frontend and Node.js backend environments
- ✅ Comprehensive test coverage (>90%) including VitalSigns-specific scenarios
- ✅ Published as NPM package with VitalSigns-focused documentation
- ✅ Performance benchmarks meet requirements for large VitalSigns datasets