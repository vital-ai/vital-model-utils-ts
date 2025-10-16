import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyDialogMapping
 */
export class HaleyDialogMapping extends VITAL_Node {
  public readonly normalizedText?: string;
  public readonly dialogText?: string;
  public readonly dialogProfileURI?: string;
  public readonly mappedNodeInstanceURI?: string;
  public readonly mappingType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyDialogMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasNormalizedText',
        tsPropertyName: 'normalizedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogText',
        tsPropertyName: 'dialogText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogProfileURI',
        tsPropertyName: 'dialogProfileURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasMappedNodeInstanceURI',
        tsPropertyName: 'mappedNodeInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasMappingType',
        tsPropertyName: 'mappingType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
