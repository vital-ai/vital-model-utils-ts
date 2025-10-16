import { VITAL_Node } from './vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalSegment
 */
export class VitalSegment extends VITAL_Node {
  public readonly segmentGlobal?: boolean;
  public readonly segmentGraphURI?: string;
  public readonly segmentStateJSON?: string;
  public readonly segmentNamespace?: string;
  public readonly segmentTenantID?: string;
  public readonly segmentID?: string;
  public readonly readOnly?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalSegment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isSegmentGlobal',
        tsPropertyName: 'segmentGlobal',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentGraphURI',
        tsPropertyName: 'segmentGraphURI',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentStateJSON',
        tsPropertyName: 'segmentStateJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentNamespace',
        tsPropertyName: 'segmentNamespace',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentTenantID',
        tsPropertyName: 'segmentTenantID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSegmentID',
        tsPropertyName: 'segmentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isReadOnly',
        tsPropertyName: 'readOnly',
        type: 'boolean',
        required: false
      }
    ];
  }


}
