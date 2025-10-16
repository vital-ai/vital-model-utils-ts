import { DialogElement } from './dialogElement.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQuestion
 */
export class DialogQuestion extends DialogElement {
  /** URI reference to one of: BaseProfile, VITAL_Fact, DialogSession, Session */
  public readonly parentFactURI?: http://vital.ai/ontology/vital-aimp#BaseProfile | http://vital.ai/ontology/vital#VITAL_Fact | http://vital.ai/ontology/vital-aimp#DialogSession | http://vital.ai/ontology/vital-aimp#Session;
  public readonly sent?: boolean;
  public readonly factPropertyName?: string;
  public readonly factClassName?: string;
  public readonly validationType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParentFactURI',
        tsPropertyName: 'parentFactURI',
        type: 'http://vital.ai/ontology/vital-aimp#BaseProfile | http://vital.ai/ontology/vital#VITAL_Fact | http://vital.ai/ontology/vital-aimp#DialogSession | http://vital.ai/ontology/vital-aimp#Session',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSent',
        tsPropertyName: 'sent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactPropertyName',
        tsPropertyName: 'factPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactClassName',
        tsPropertyName: 'factClassName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasValidationType',
        tsPropertyName: 'validationType',
        type: 'string',
        required: false
      }
    ];
  }


}
