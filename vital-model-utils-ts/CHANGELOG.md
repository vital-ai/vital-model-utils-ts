# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2024-10-15

### Fixed
- Updated class generator to use scoped package imports (`@vital-ai/vital-model-utils`)
- Moved tests to proper TypeScript convention (`src/__tests__/`)
- Fixed TypeScript configuration for Jest types
- Cleaned up test configuration and removed duplicate configs

### Improved
- Simplified TypeScript configuration with single source of truth
- Better IDE support with proper Jest type recognition
- Cleaner project structure following Node.js conventions

## [0.1.0] - 2024-10-15

### Added
- Initial release of vital-model-utils TypeScript library
- VitalSigns base classes (VITAL_Node, VITAL_Edge, VITAL_HyperNode, VITAL_HyperEdge, VITAL_GraphContainerObject)
- Schema-to-TypeScript class generation with proper type safety
- Multi-valued property support with array types (`string[]`, `number[]`, etc.)
- Union type support with string literals for type safety
- JSON-LD conversion and processing
- JSONL file processing with auto-format detection
- Graph traversal and filtering capabilities
- REST API integration methods:
  - `VitalSignsConverter.toMapList()` - convert objects to Map list for REST output
  - `VitalSignsConverter.fromJsonMapList()` - convert Map list to objects for REST input
  - `object.toMap()` - individual object to Map conversion
  - `object.fromMap()` - populate object from Map
- CLI tools for schema processing and class generation
- Complete TypeScript type definitions
- Comprehensive test suite

### Features
- Type-safe VitalSigns object creation and manipulation
- Seamless JSON-LD ↔ VitalSigns conversion
- Batch processing capabilities for large datasets
- Knowledge graph traversal with filtering
- REST service integration helpers
- Command-line utilities for development workflows

### Dependencies
- ajv ^8.12.0 - JSON schema validation
- commander ^11.1.0 - CLI framework
- handlebars ^4.7.8 - Template engine for code generation
