import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Card
 */
export class Card extends VITAL_Node {
  public readonly cardText?: string;
  public readonly sendAsAttachment?: boolean;
  public readonly index?: number;
  public readonly aIMPMessageContentURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for Card
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardText',
        tsPropertyName: 'cardText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsAttachment',
        tsPropertyName: 'sendAsAttachment',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContentURI',
        tsPropertyName: 'aIMPMessageContentURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
