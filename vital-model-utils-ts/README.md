# Vital Model Utils TypeScript

A comprehensive TypeScript library for working with VitalSigns ontologies, providing schema-to-class generation, JSON-LD conversion, JSONL processing, and graph traversal capabilities.

## Features

- 🏗️ **VitalSigns Base Classes**: Complete implementation of VITAL_Node, VITAL_Edge, VITAL_HyperNode, VITAL_HyperEdge, and VITAL_GraphContainerObject
- 🔄 **JSON-LD Support**: Seamless conversion between JSON-LD and VitalSigns JSON formats
- 📄 **JSONL Processing**: Process large datasets from JSONL files with auto-format detection
- 🕸️ **Graph Traversal**: Advanced graph navigation with filtering and path finding
- 🎯 **Type Safety**: Full TypeScript support with branded union types
- 🛠️ **CLI Tools**: Command-line utilities for schema validation and data processing
- ⚡ **Performance**: Optimized for large VitalSigns datasets

## Installation

```bash
npm install vital-model-utils
```

## Quick Start

### Processing VitalSigns Data

```typescript
import { 
  VitalSignsJsonlProcessor, 
  VitalSignsGraphTraverser,
  VitalSignsConverter 
} from 'vital-model-utils';

// Process JSON-LD instances file
const schema = JSON.parse(fs.readFileSync('schema.json', 'utf-8'));
const graphInstance = await VitalSignsJsonlProcessor.processJsonLDFile(
  'instances.jsonl',
  schema
);

// Traverse the graph
const traverser = new VitalSignsGraphTraverser(graphInstance);
const connectedNodes = traverser.findConnectedNodes('urn:node-123', {
  direction: 'outgoing',
  maxDepth: 2
});
```

### Converting JSON-LD Objects

```typescript
// JSON-LD format (from instances.jsonl)
const jsonLD = {
  "@id": "http://vital.ai/ontology/haley-ai-kg#KGActionStatus_OK",
  "@type": "http://vital.ai/ontology/haley-ai-kg#KGActionStatus"
};

const result = VitalSignsConverter.toInstance(jsonLD, KGEntity);
const entity = result.instance;
```

## REST API Integration

The library provides specialized methods for REST service integration:

```typescript
import { VitalSignsConverter, KGEntity } from 'vital-model-utils';

// REST Output: Convert VitalSigns objects to JSON for API response
const entities = [entity1, entity2, entity3];
const mapList = VitalSignsConverter.toMapList(entities);
const jsonResponse = JSON.stringify(mapList.map(m => Object.fromEntries(m)));

// REST Input: Parse JSON from API request to VitalSigns objects
const jsonData = JSON.parse(requestBody);
const maps = jsonData.map(obj => new Map(Object.entries(obj)));
const entities = VitalSignsConverter.fromJsonMapList(maps, KGEntity);
```

### Individual Object Map Methods

```typescript
// Convert object to Map (helpful for batch processing)
const entityMap = entity.toMap();

// Create object from Map (helpful for parsing)
const newEntity = new KGEntity();
newEntity.fromMap(entityMap);
```

## CLI Usage

### Generate Classes

```bash
npx vital-model-utils generate-classes schema.json
```

```bash
# Process JSON-LD format
npx vital-model-utils process-jsonl instances.jsonl \
  --schema schema.json \
  --format json-ld \
  --stats

# Auto-detect format
npx vital-model-utils process-jsonl data.jsonl \
  --schema schema.json \
  --format auto \
  --output processed-data.json
```

### Schema Information

```bash
npx vital-model-utils info schema.json
```

## Development

### Setup

```bash
git clone <repository>
cd vital-model-utils-ts
npm install
```

### Build

```bash
npm run build        # Build for production
npm run build:watch  # Build in watch mode
```

### Test

```bash
npm test            # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run with coverage
```

## License

MIT License - see LICENSE file for details.