import { Card } from './card.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ThingCard
 */
export class ThingCard extends Card {
  public readonly url?: string;
  public readonly shortDescription?: string;
  public readonly title?: string;
  public readonly neLatitude?: number;
  public readonly zoomLevel?: number;
  public readonly imageCaption?: string;
  public readonly detailsEnabled?: boolean;
  public readonly formattedContent?: string;
  public readonly imageURL?: string;
  public readonly autosaveOnChange?: boolean;
  public readonly directionsJSONResponse?: string;
  public readonly thumbnailImageFileNodeURI?: string;
  public readonly payload?: string;
  public readonly publicationDate?: string | Date;
  public readonly directionsEndAddress?: string;
  public readonly swLatitude?: number;
  public readonly searchString?: string;
  public readonly latitude?: number;
  public readonly neLongitude?: number;
  public readonly imageFileNodeURI?: string;
  public readonly directionsStartAddress?: string;
  public readonly thumbnailImageURL?: string;
  public readonly address?: string;
  public readonly swLongitude?: number;
  public readonly longitude?: number;
  public readonly editing?: boolean;
  public readonly cardHeader?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ThingCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTitle',
        tsPropertyName: 'title',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageCaption',
        tsPropertyName: 'imageCaption',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDetailsEnabled',
        tsPropertyName: 'detailsEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFormattedContent',
        tsPropertyName: 'formattedContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageURL',
        tsPropertyName: 'imageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAutosaveOnChange',
        tsPropertyName: 'autosaveOnChange',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsJSONResponse',
        tsPropertyName: 'directionsJSONResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageFileNodeURI',
        tsPropertyName: 'thumbnailImageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayload',
        tsPropertyName: 'payload',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPublicationDate',
        tsPropertyName: 'publicationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasImageFileNodeURI',
        tsPropertyName: 'imageFileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDirectionsStartAddress',
        tsPropertyName: 'directionsStartAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasThumbnailImageURL',
        tsPropertyName: 'thumbnailImageURL',
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isEditing',
        tsPropertyName: 'editing',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardHeader',
        tsPropertyName: 'cardHeader',
        type: 'string',
        required: false
      }
    ];
  }


}
