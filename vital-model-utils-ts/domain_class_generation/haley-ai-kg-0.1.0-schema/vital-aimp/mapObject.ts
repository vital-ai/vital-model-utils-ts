import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MapObject
 */
export class MapObject extends Card {
  public readonly directionsEndAddress?: string;
  public readonly swLatitude?: number;
  public readonly neLatitude?: number;
  public readonly zoomLevel?: number;
  public readonly searchString?: string;
  public readonly latitude?: number;
  public readonly neLongitude?: number;
  public readonly directionsStartAddress?: string;
  public readonly directionsJSONResponse?: string;
  public readonly address?: string;
  public readonly swLongitude?: number;
  public readonly longitude?: number;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for MapObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsEndAddress',
        tsPropertyName: 'directionsEndAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSwLatitude',
        tsPropertyName: 'swLatitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNeLatitude',
        tsPropertyName: 'neLatitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasZoomLevel',
        tsPropertyName: 'zoomLevel',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSearchString',
        tsPropertyName: 'searchString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLatitude',
        tsPropertyName: 'latitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNeLongitude',
        tsPropertyName: 'neLongitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress',
        tsPropertyName: 'directionsStartAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse',
        tsPropertyName: 'directionsJSONResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAddress',
        tsPropertyName: 'address',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSwLongitude',
        tsPropertyName: 'swLongitude',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLongitude',
        tsPropertyName: 'longitude',
        type: 'number',
        required: false
      }
    ];
  }


}
