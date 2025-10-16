import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalCollection
 */
export class VitalCollection extends VITAL_Node {
  public readonly includesSubclasses?: boolean;
  public readonly collectionSchemaName?: string;
  public readonly collectionSchemaType?: string;
  public readonly collectionID?: string;
  public readonly collectionMultiTenant?: boolean;
  public readonly collectionClassName?: string;
  public readonly collectionSchemaVersion?: string;
  public readonly collectionNamespace?: string;
  public readonly collectionSchemaYAML?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalCollection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isIncludesSubclasses',
        tsPropertyName: 'includesSubclasses',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaName',
        tsPropertyName: 'collectionSchemaName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaType',
        tsPropertyName: 'collectionSchemaType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionID',
        tsPropertyName: 'collectionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isCollectionMultiTenant',
        tsPropertyName: 'collectionMultiTenant',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionClassName',
        tsPropertyName: 'collectionClassName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaVersion',
        tsPropertyName: 'collectionSchemaVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionNamespace',
        tsPropertyName: 'collectionNamespace',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCollectionSchemaYAML',
        tsPropertyName: 'collectionSchemaYAML',
        type: 'string',
        required: false
      }
    ];
  }


}
