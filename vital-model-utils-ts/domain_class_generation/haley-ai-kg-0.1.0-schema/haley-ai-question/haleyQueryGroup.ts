import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQueryGroup
 */
export class HaleyQueryGroup extends VITAL_Node {
  public readonly haleyQueryCaptureGroup?: boolean;
  public readonly haleyQueryCaptureGroupName?: string;
  public readonly haleyQueryGroupOptional?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyQueryGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryCaptureGroup',
        tsPropertyName: 'haleyQueryCaptureGroup',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryCaptureGroupName',
        tsPropertyName: 'haleyQueryCaptureGroupName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryGroupOptional',
        tsPropertyName: 'haleyQueryGroupOptional',
        type: 'boolean',
        required: false
      }
    ];
  }


}
