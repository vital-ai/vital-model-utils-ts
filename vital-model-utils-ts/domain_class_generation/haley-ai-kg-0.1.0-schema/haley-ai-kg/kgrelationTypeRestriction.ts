import { KGTypeRestriction } from './kgtypeRestriction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRelationTypeRestriction
 */
export class KGRelationTypeRestriction extends KGTypeRestriction {
  public readonly sourceRelationTypeRestrictionURI?: string;
  public readonly destinationRelationTypeRestrictionURI?: string;
  public readonly kGRelationTypeExpandSource?: boolean;
  public readonly kGRelationTypeDestinationOpen?: boolean;
  public readonly kGRelationTypeExpandDestination?: boolean;
  public readonly kGRelationTypeURI?: string;
  public readonly kGRelationTypeSourceOpen?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGRelationTypeRestriction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasSourceRelationTypeRestrictionURI',
        tsPropertyName: 'sourceRelationTypeRestrictionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDestinationRelationTypeRestrictionURI',
        tsPropertyName: 'destinationRelationTypeRestrictionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandSource',
        tsPropertyName: 'kGRelationTypeExpandSource',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeDestinationOpen',
        tsPropertyName: 'kGRelationTypeDestinationOpen',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeExpandDestination',
        tsPropertyName: 'kGRelationTypeExpandDestination',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRelationTypeURI',
        tsPropertyName: 'kGRelationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGRelationTypeSourceOpen',
        tsPropertyName: 'kGRelationTypeSourceOpen',
        type: 'boolean',
        required: false
      }
    ];
  }


}
