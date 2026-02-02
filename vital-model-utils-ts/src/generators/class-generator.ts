import * as fs from 'fs';
import * as path from 'path';
import { VitalSignsClassDefinition, PropertyMapping } from '../types/schema.types.js';
import { VitalSignsHelpers } from '../utils/helpers.js';

/**
 * VitalSigns TypeScript Class Generator
 */
export class VitalSignsClassGenerator {

  /**
   * Generate TypeScript class content from class definition
   */
  static generateClass(classDef: VitalSignsClassDefinition, allClasses: VitalSignsClassDefinition[]): string {
    const imports = this.generateImports(classDef, allClasses);
    const properties = this.generateProperties(classDef);
    const constructor = this.generateConstructor(classDef);
    const propertyDefinitions = this.generatePropertyDefinitions(classDef);
    const additionalMethods = this.generateAdditionalMethods(classDef);

    return `${imports}

/**
 * VitalSigns class: ${classDef.classURI}
 */
export class ${classDef.className} extends ${classDef.baseClass} {
${properties}

${constructor}

${propertyDefinitions}

${additionalMethods}
}
`;
  }

  /**
   * Generate import statements
   */
  private static generateImports(classDef: VitalSignsClassDefinition, allClasses: VitalSignsClassDefinition[]): string {
    const imports: string[] = [];
    
    // Import base class from @vital-ai/vital-model-utils library
    if (classDef.baseClass.endsWith('_Base')) {
      imports.push(`import { ${classDef.baseClass}, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';`);
    } else if (classDef.baseClass === 'VitalSignsObject') {
      imports.push(`import { VitalSignsObject, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';`);
    } else {
      // Find the base class in all classes to determine its ontology
      const baseClassDef = allClasses.find(c => c.className === classDef.baseClass);
      if (baseClassDef) {
        const currentOntology = this.getOntologyPackage(classDef.classURI);
        const baseOntology = this.getOntologyPackage(baseClassDef.classURI);
        
        if (currentOntology === baseOntology) {
          // Same ontology - relative import
          imports.push(`import { ${classDef.baseClass} } from './${VitalSignsHelpers.toFileName(classDef.baseClass)}';`);
        } else {
          // Different ontology - cross-ontology import
          imports.push(`import { ${classDef.baseClass} } from '../${baseOntology}/${VitalSignsHelpers.toFileName(classDef.baseClass)}';`);
        }
      } else {
        // Fallback to same directory
        imports.push(`import { ${classDef.baseClass} } from './${VitalSignsHelpers.toFileName(classDef.baseClass)}';`);
      }
      imports.push(`import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';`);
    }

    return imports.join('\n');
  }


  /**
   * Generate class properties
   */
  private static generateProperties(classDef: VitalSignsClassDefinition): string {
    if (classDef.properties.length === 0) {
      return '';
    }

    const properties = classDef.properties.map(prop => {
      const optional = prop.required ? '' : '?';
      const type = this.mapPropertyType(prop);
      const comment = prop.description ? `  /** ${prop.description} */\n` : '';
      
      // Add declare modifier for properties that might override base class properties
      // This prevents TypeScript errors for intentional overrides
      const declare = this.shouldDeclareProperty(prop, classDef) ? 'declare ' : '';
      
      return `${comment}  ${declare}public ${prop.tsPropertyName}${optional}: ${type};`;
    });

    return properties.join('\n');
  }

  /**
   * Generate constructor
   */
  private static generateConstructor(classDef: VitalSignsClassDefinition): string {
    const vitaltype = classDef.classURI;
    
    return `
  constructor() {
    super();
    this.vitaltype = '${vitaltype}';
  }`;
  }

  /**
   * Generate property definitions method
   */
  private static generatePropertyDefinitions(classDef: VitalSignsClassDefinition): string {
    const properties = classDef.properties.map(prop => {
      return `      {
        propertyURI: '${prop.propertyURI}',
        tsPropertyName: '${prop.tsPropertyName}',
        type: '${prop.type}',
        required: ${prop.required || false}${prop.format ? `,\n        format: '${prop.format}'` : ''}
      }`;
    }).join(',\n');

    return `  /**
   * Get property definitions for ${classDef.className}
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
${properties}
    ];
  }`;
  }

  /**
   * Generate additional methods for specific class types
   */
  private static generateAdditionalMethods(classDef: VitalSignsClassDefinition): string {
    const methods: string[] = [];

    // Add type-specific methods
    if (classDef.baseClass.includes('Edge')) {
      methods.push(`
  /**
   * Get the VitalSigns type URI for ${classDef.className}
   */
  static getVitalType(): string {
    return '${classDef.classURI}';
  }`);
    }

    return methods.join('\n');
  }

  /**
   * Map property type to TypeScript type
   */
  private static mapPropertyType(prop: PropertyMapping): string {
    // Handle union types - convert URIs to string literals for type safety
    if (prop.unionTypes && prop.unionTypes.length > 0) {
      // For union types that are all URIs, just use string
      const allUris = prop.unionTypes.every(type => type.startsWith('http://'));
      if (allUris) {
        return 'string';
      }
      
      const unionTypes = prop.unionTypes.map(type => {
        // For URI types, just use string since these are runtime values
        if (type.startsWith('http://')) {
          return 'string';
        }
        // Wrap other constants in quotes to make them string literals
        return `"${type}"`;
      });
      
      // If all union types are strings, just return string
      if (unionTypes.every(t => t === 'string')) {
        return 'string';
      }
      return unionTypes.join(' | ');
    }

    // Handle array types (multi-value properties)
    if (prop.type === 'array' && prop.items) {
      const itemType = this.mapItemType(prop.items);
      return `${itemType}[]`;
    }

    // Handle format-specific types
    if (prop.format === 'uri') {
      return 'string'; // Could be a branded URI type
    }
    if (prop.format === 'date-time') {
      return 'string | Date'; // Allow both string and Date
    }

    // Handle cases where the type itself contains URIs (malformed union types)
    if (typeof prop.type === 'string' && prop.type.includes('http://')) {
      return 'string';
    }

    return prop.type;
  }

  /**
   * Map array item type to TypeScript type
   */
  private static mapItemType(items: any): string {
    if (items.format === 'uri') {
      return 'string';
    }
    if (items.format === 'date-time') {
      return 'string | Date';
    }
    return items.type;
  }

  /**
   * Check if a property should use declare modifier to avoid inheritance conflicts
   */
  private static shouldDeclareProperty(prop: PropertyMapping, _classDef: VitalSignsClassDefinition): boolean {
    // Properties already defined in VitalSignsObject base class
    const baseClassProperties = [
      'URI', 'vitaltype', 'timestamp', 'active'
    ];
    
    // Other common properties that might conflict with base classes
    const commonConflictProperties = [
      'loginURI', 'recipient', 'geolocation', 'memberURIs', 
      'accessGrantMemberURIs', 'haleySetMemberURIs'
    ];
    
    return baseClassProperties.includes(prop.tsPropertyName) || 
           commonConflictProperties.includes(prop.tsPropertyName);
  }

  /**
   * Generate all classes to directory structure
   */
  static async generateAllClasses(
    classes: VitalSignsClassDefinition[], 
    outputDir: string,
    domainName: string
  ): Promise<void> {
    // Create directory structure
    const structure = this.createDirectoryStructure(classes);
    
    // Create schema-named directory (e.g., "haley-ai-kg-schema-0.1.0")
    const schemaDirName = `${domainName}-schema`;
    const schemaDir = path.join(outputDir, schemaDirName);
    await this.ensureDirectory(schemaDir);
    
    // Create ontology subdirectories within the schema directory
    for (const dir of Object.keys(structure)) {
      await this.ensureDirectory(path.join(schemaDir, dir));
    }

    // Generate classes in ontology subdirectories
    for (const classDef of classes) {
      const directory = this.getClassDirectory(classDef);
      const fileName = VitalSignsHelpers.toFileName(classDef.className) + '.ts';
      const filePath = path.join(schemaDir, directory, fileName);
      
      const classContent = this.generateClass(classDef, classes);
      await fs.promises.writeFile(filePath, classContent, 'utf-8');
    }

    // Generate index files for each ontology subdirectory
    await this.generateIndexFiles(schemaDir, structure);
    
    // Generate main index file that exports from all ontologies
    await this.generateMainIndex(schemaDir, structure, domainName);
  }

  /**
   * Create directory structure for classes based on ontology
   */
  private static createDirectoryStructure(classes: VitalSignsClassDefinition[]): Record<string, VitalSignsClassDefinition[]> {
    const structure: Record<string, VitalSignsClassDefinition[]> = {};

    for (const classDef of classes) {
      const ontologyPackage = this.getOntologyPackage(classDef.classURI);
      if (!structure[ontologyPackage]) {
        structure[ontologyPackage] = [];
      }
      structure[ontologyPackage].push(classDef);
    }

    return structure;
  }

  /**
   * Get ontology package name from class URI
   */
  private static getOntologyPackage(classURI: string): string {
    // Extract ontology from URI like "http://vital.ai/ontology/haley#ClassName"
    const match = classURI.match(/http:\/\/vital\.ai\/ontology\/([^#]+)#/);
    if (match) {
      const ontologyName = match[1];
      
      // Return the exact ontology name as the package directory
      // This preserves the original ontology structure
      return ontologyName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
    }
    
    return 'other';
  }

  /**
   * Get directory for a class based on its ontology
   */
  private static getClassDirectory(classDef: VitalSignsClassDefinition): string {
    return this.getOntologyPackage(classDef.classURI);
  }

  /**
   * Generate index files for each directory
   */
  private static async generateIndexFiles(
    outputDir: string, 
    structure: Record<string, VitalSignsClassDefinition[]>
  ): Promise<void> {
    for (const [directory, classes] of Object.entries(structure)) {
      if (classes.length === 0) continue;

      const exports = classes.map(classDef => {
        const fileName = VitalSignsHelpers.toFileName(classDef.className);
        return `export { ${classDef.className} } from './${fileName}';`;
      }).join('\n');

      // Get ontology name for better description
      const ontologyName = directory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const indexContent = `// ${ontologyName} ontology classes
${exports}
`;

      await fs.promises.writeFile(
        path.join(outputDir, directory, 'index.ts'), 
        indexContent, 
        'utf-8'
      );
    }
  }

  /**
   * Generate main index file that exports from all ontologies
   */
  private static async generateMainIndex(
    schemaDir: string, 
    structure: Record<string, VitalSignsClassDefinition[]>,
    domainName: string
  ): Promise<void> {
    const exports = Object.keys(structure)
      .filter(dir => structure[dir].length > 0)
      .map(dir => `export * from './${dir}/index';`)
      .join('\n');

    const indexContent = `// ${domainName} Schema Classes
// Generated from VitalSigns schema
// Organized by ontology

${exports}
`;

    await fs.promises.writeFile(
      path.join(schemaDir, 'index.ts'), 
      indexContent, 
      'utf-8'
    );
  }


  /**
   * Ensure directory exists
   */
  private static async ensureDirectory(dirPath: string): Promise<void> {
    try {
      await fs.promises.access(dirPath);
    } catch {
      await fs.promises.mkdir(dirPath, { recursive: true });
    }
  }
}
