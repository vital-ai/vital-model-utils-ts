#!/usr/bin/env node

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { VitalSignsJsonlProcessor } from './converters/jsonl-processor.js';
import { VitalSignsValidation } from './utils/validation.js';
import { VitalSignsSchema } from './types/schema.types.js';
import { VitalSignsSchemaParser } from './generators/schema-parser.js';
import { VitalSignsClassGenerator } from './generators/class-generator.js';

const program = new Command();

program
  .name('vital-model-utils')
  .description('VitalSigns model utilities for TypeScript')
  .version('0.1.0');

program
  .command('validate-schema')
  .description('Validate a VitalSigns schema file')
  .argument('<schema-file>', 'Path to the VitalSigns schema JSON file')
  .action(async (schemaFile: string) => {
    try {
      console.log(`Validating schema: ${schemaFile}`);
      
      if (!fs.existsSync(schemaFile)) {
        console.error(`Error: Schema file not found: ${schemaFile}`);
        process.exit(1);
      }

      const schemaContent = fs.readFileSync(schemaFile, 'utf-8');
      const schema: VitalSignsSchema = JSON.parse(schemaContent);

      const validation = VitalSignsValidation.validateSchema(schema);
      
      if (validation.valid) {
        console.log('✅ Schema is valid');
        console.log(`   Domain: ${schema.domainURI}`);
        console.log(`   Version: ${schema.version}`);
        console.log(`   Classes: ${Object.keys(schema.$defs).length}`);
      } else {
        console.log('❌ Schema validation failed:');
        validation.errors.forEach(error => console.log(`   - ${error}`));
        process.exit(1);
      }
    } catch (error) {
      console.error(`Error validating schema: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  });

program
  .command('process-jsonl')
  .description('Process a JSONL file containing VitalSigns objects')
  .argument('<jsonl-file>', 'Path to the JSONL file')
  .option('-s, --schema <schema-file>', 'Path to the VitalSigns schema file')
  .option('-f, --format <format>', 'Input format: json-ld, vitalsigns, or auto', 'auto')
  .option('-o, --output <output-file>', 'Output file for processed data')
  .option('--stats', 'Show processing statistics')
  .action(async (jsonlFile: string, options: any) => {
    try {
      console.log(`Processing JSONL file: ${jsonlFile}`);
      
      if (!fs.existsSync(jsonlFile)) {
        console.error(`Error: JSONL file not found: ${jsonlFile}`);
        process.exit(1);
      }

      let schema: VitalSignsSchema | undefined;
      if (options.schema) {
        if (!fs.existsSync(options.schema)) {
          console.error(`Error: Schema file not found: ${options.schema}`);
          process.exit(1);
        }
        const schemaContent = fs.readFileSync(options.schema, 'utf-8');
        schema = JSON.parse(schemaContent);
      }

      if (!schema) {
        console.error('Error: Schema file is required');
        process.exit(1);
      }

      const startTime = Date.now();
      let graphInstance;

      if (options.format === 'json-ld') {
        graphInstance = await VitalSignsJsonlProcessor.processJsonLDFile(jsonlFile);
      } else {
        graphInstance = await VitalSignsJsonlProcessor.processFileWithAutoDetection(
          jsonlFile, 
          options.format
        );
      }

      const processingTime = Date.now() - startTime;

      if (options.stats) {
        console.log('\n📊 Processing Statistics:');
        console.log(`   Processing time: ${processingTime}ms`);
        console.log(`   Nodes: ${graphInstance.nodes.size}`);
        console.log(`   Edges: ${graphInstance.edges.size}`);
        console.log(`   Types: ${graphInstance.objectsByType.size}`);
        
        console.log('\n📋 Object Types:');
        for (const [type, objects] of graphInstance.objectsByType) {
          const className = type.split('#')[1] || type;
          console.log(`   ${className}: ${objects.length}`);
        }
      }

      if (options.output) {
        const outputData = {
          metadata: {
            processingTime,
            nodeCount: graphInstance.nodes.size,
            edgeCount: graphInstance.edges.size,
            typeCount: graphInstance.objectsByType.size
          },
          nodes: Array.from(graphInstance.nodes.values()).map(node => node.toJSON()),
          edges: Array.from(graphInstance.edges.values()).map(edge => edge.toJSON())
        };

        fs.writeFileSync(options.output, JSON.stringify(outputData, null, 2));
        console.log(`\n💾 Output saved to: ${options.output}`);
      }

      console.log('\n✅ Processing completed successfully');
    } catch (error) {
      console.error(`Error processing JSONL: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  });

program
  .command('generate')
  .description('Generate TypeScript classes from VitalSigns schema')
  .argument('<schema-file>', 'Path to the VitalSigns schema JSON file')
  .option('-o, --output <output-dir>', 'Output directory for generated classes', './generated')
  .action(async (schemaFile: string, options: any) => {
    try {
      console.log(`Generating classes from schema: ${schemaFile}`);
      
      if (!fs.existsSync(schemaFile)) {
        console.error(`Error: Schema file not found: ${schemaFile}`);
        process.exit(1);
      }

      const schemaContent = fs.readFileSync(schemaFile, 'utf-8');
      const schema: VitalSignsSchema = JSON.parse(schemaContent);

      // Validate schema
      const validation = VitalSignsValidation.validateSchema(schema);
      if (!validation.valid) {
        console.error('❌ Schema validation failed:');
        validation.errors.forEach(error => console.error(`   - ${error}`));
        process.exit(1);
      }

      console.log('✅ Schema is valid');
      console.log(`   Domain: ${schema.domainURI}`);
      console.log(`   Classes: ${Object.keys(schema.$defs).length}`);

      // Parse schema
      const startTime = Date.now();
      const classes = VitalSignsSchemaParser.parseSchema(schema);
      
      // Generate classes
      const outputDir = path.resolve(options.output);
      const domainName = schema.name || 'VitalSigns';
      
      console.log(`\n🔧 Generating ${classes.length} classes to: ${outputDir}`);
      
      await VitalSignsClassGenerator.generateAllClasses(classes, outputDir, domainName);
      
      const generationTime = Date.now() - startTime;
      console.log(`\n✅ Class generation completed in ${generationTime}ms`);
      
      // Show statistics
      const structure = VitalSignsSchemaParser.createDirectoryStructure(classes);
      console.log('\n📊 Generated Classes by Ontology:');
      for (const [directory, classNames] of Object.entries(structure)) {
        if (classNames.length > 0) {
          console.log(`   ${directory}: ${classNames.length} classes`);
        }
      }

    } catch (error) {
      console.error(`Error generating classes: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  });

program
  .command('info')
  .description('Show information about a VitalSigns schema')
  .argument('<schema-file>', 'Path to the VitalSigns schema JSON file')
  .action(async (schemaFile: string) => {
    try {
      if (!fs.existsSync(schemaFile)) {
        console.error(`Error: Schema file not found: ${schemaFile}`);
        process.exit(1);
      }

      const schemaContent = fs.readFileSync(schemaFile, 'utf-8');
      const schema: VitalSignsSchema = JSON.parse(schemaContent);

      console.log('📋 VitalSigns Schema Information');
      console.log('================================');
      console.log(`Title: ${schema.title}`);
      console.log(`Domain URI: ${schema.domainURI}`);
      console.log(`Name: ${schema.name}`);
      console.log(`Version: ${schema.version}`);
      
      if (schema.vitalsignsVersion) {
        console.log(`VitalSigns Version: ${schema.vitalsignsVersion}`);
      }
      
      if (schema.parents && schema.parents.length > 0) {
        console.log(`Parent Domains: ${schema.parents.join(', ')}`);
      }

      console.log('\n🔧 TypeScript Configuration:');
      console.log(`  Namespace: ${schema.typeScriptConfig.namespace}`);
      console.log(`  Export Format: ${schema.typeScriptConfig.exportFormat}`);
      console.log(`  Generate Union Types: ${schema.typeScriptConfig.generateUnionTypes}`);
      console.log(`  Union Type Strategy: ${schema.typeScriptConfig.unionTypeStrategy}`);

      console.log(`\n📊 Classes: ${Object.keys(schema.$defs).length}`);
      
      // Group classes by base type
      const baseTypes: Record<string, string[]> = {
        'VITAL_Node': [],
        'VITAL_Edge': [],
        'VITAL_HyperNode': [],
        'VITAL_HyperEdge': [],
        'VITAL_GraphContainerObject': [],
        'Other': []
      };

      for (const [className, classDef] of Object.entries(schema.$defs)) {
        let baseType = 'Other';
        
        if (classDef.allOf) {
          for (const ref of classDef.allOf) {
            if (ref.$ref) {
              const refType = ref.$ref.split('/').pop();
              if (refType && baseTypes[refType]) {
                baseType = refType;
                break;
              }
            }
          }
        }
        
        baseTypes[baseType].push(className);
      }

      for (const [baseType, classes] of Object.entries(baseTypes)) {
        if (classes.length > 0) {
          console.log(`\n${baseType} (${classes.length}):`);
          classes.slice(0, 10).forEach(className => {
            console.log(`  - ${className}`);
          });
          if (classes.length > 10) {
            console.log(`  ... and ${classes.length - 10} more`);
          }
        }
      }

    } catch (error) {
      console.error(`Error reading schema info: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

program.parse();
