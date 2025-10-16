import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction
 */
export class HaleyInteractionFlowStepAction extends VITAL_Node {
  public readonly actionWithCommitment?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyInteractionFlowStepAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActionWithCommitment',
        tsPropertyName: 'actionWithCommitment',
        type: 'boolean',
        required: false
      }
    ];
  }


}
