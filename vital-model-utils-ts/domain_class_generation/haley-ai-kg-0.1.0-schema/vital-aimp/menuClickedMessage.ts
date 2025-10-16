import { AIMPMessage } from './aimpmessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MenuClickedMessage
 */
export class MenuClickedMessage extends AIMPMessage {
  public readonly menu?: string;
  public readonly menuURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for MenuClickedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMenu',
        tsPropertyName: 'menu',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMenuURI',
        tsPropertyName: 'menuURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
