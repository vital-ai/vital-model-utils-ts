import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#TargetNode
 */
export class TargetNode extends VITAL_Node {
  public readonly targetDoubleValue?: number;
  public readonly targetScore?: number;
  public readonly targetStringValue?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TargetNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTargetDoubleValue',
        tsPropertyName: 'targetDoubleValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTargetScore',
        tsPropertyName: 'targetScore',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTargetStringValue',
        tsPropertyName: 'targetStringValue',
        type: 'string',
        required: false
      }
    ];
  }


}
