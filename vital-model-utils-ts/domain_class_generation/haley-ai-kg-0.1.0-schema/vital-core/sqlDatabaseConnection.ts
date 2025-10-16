import { DatabaseConnection } from './databaseConnection.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SqlDatabaseConnection
 */
export class SqlDatabaseConnection extends DatabaseConnection {
  public readonly database?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SqlDatabaseConnection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDatabase',
        tsPropertyName: 'database',
        type: 'string',
        required: false
      }
    ];
  }


}
