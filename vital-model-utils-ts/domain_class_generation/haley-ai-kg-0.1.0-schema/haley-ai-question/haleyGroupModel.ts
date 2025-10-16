import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupModel
 */
export class HaleyGroupModel extends VITAL_Node {
  public readonly activeGroupModel?: boolean;
  public readonly haleyGroupModelActivateDate?: string | Date;
  public readonly currentHaleyGroupModelVersionURI?: string;
  public readonly haleyGroupBase?: string;
  public readonly currentHaleyGroupModelVersion?: string;
  public readonly haleyGroupModelDeactivateDate?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGroupModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveGroupModel',
        tsPropertyName: 'activeGroupModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelActivateDate',
        tsPropertyName: 'haleyGroupModelActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersionURI',
        tsPropertyName: 'currentHaleyGroupModelVersionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase',
        tsPropertyName: 'haleyGroupBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersion',
        tsPropertyName: 'currentHaleyGroupModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelDeactivateDate',
        tsPropertyName: 'haleyGroupModelDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
