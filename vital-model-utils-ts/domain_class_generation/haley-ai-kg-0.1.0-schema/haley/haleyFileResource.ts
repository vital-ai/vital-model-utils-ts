import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyFileResource
 */
export class HaleyFileResource extends VITAL_Node {
  public readonly resourceFilePath?: string;
  public readonly resourceVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyFileResource
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResourceFilePath',
        tsPropertyName: 'resourceFilePath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResourceVersion',
        tsPropertyName: 'resourceVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
