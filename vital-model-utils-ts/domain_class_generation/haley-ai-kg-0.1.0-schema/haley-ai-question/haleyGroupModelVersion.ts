import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupModelVersion
 */
export class HaleyGroupModelVersion extends VITAL_Node {
  public readonly haleyGroupModelURI?: string;
  public readonly haleyGroupBase?: string;
  public readonly haleyGroupModelVersionDeactivateDate?: string | Date;
  public readonly haleyGroupModelVersionActivateDate?: string | Date;
  public readonly activeGroupModelVersion?: boolean;
  public readonly haleyGroupBaseVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyGroupModelVersion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelURI',
        tsPropertyName: 'haleyGroupModelURI',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionDeactivateDate',
        tsPropertyName: 'haleyGroupModelVersionDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelVersionActivateDate',
        tsPropertyName: 'haleyGroupModelVersionActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveGroupModelVersion',
        tsPropertyName: 'activeGroupModelVersion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion',
        tsPropertyName: 'haleyGroupBaseVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
