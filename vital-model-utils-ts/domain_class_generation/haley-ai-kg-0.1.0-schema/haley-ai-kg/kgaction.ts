import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAction
 */
export class KGAction extends VITAL_Node {
  public readonly kGActionType?: string;
  public readonly kGActionStatusURI?: string;
  public readonly kGActionAttemptDateTime?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionType',
        tsPropertyName: 'kGActionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionStatusURI',
        tsPropertyName: 'kGActionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionAttemptDateTime',
        tsPropertyName: 'kGActionAttemptDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
