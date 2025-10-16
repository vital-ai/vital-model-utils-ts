import { DatabaseConnection } from './databaseConnection.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SparqlDatabaseConnection
 */
export class SparqlDatabaseConnection extends DatabaseConnection {
  public readonly catalogName?: string;
  public readonly repositoryName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for SparqlDatabaseConnection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCatalogName',
        tsPropertyName: 'catalogName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRepositoryName',
        tsPropertyName: 'repositoryName',
        type: 'string',
        required: false
      }
    ];
  }


}
