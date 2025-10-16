import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQueryAction
 */
export class DialogQueryAction extends DialogAction {
  public readonly queryType?: string;
  public readonly propertyName?: string;
  public readonly criteriaType?: string;
  public readonly sourceFactName?: string;
  public readonly errorMessagePropertyName?: string;
  public readonly graphObjectsLinked?: boolean;
  public readonly relationshipFactScope?: string;
  public readonly targetService?: string;
  public readonly destinationFactScope?: string;
  public readonly sourceFactScope?: string;
  public readonly timeoutSeconds?: number;
  public readonly statusPropertyName?: string;
  public readonly destinationFactName?: string;
  public readonly relationshipFactName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogQueryAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQueryType',
        tsPropertyName: 'queryType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCriteriaType',
        tsPropertyName: 'criteriaType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceFactName',
        tsPropertyName: 'sourceFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasErrorMessagePropertyName',
        tsPropertyName: 'errorMessagePropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked',
        tsPropertyName: 'graphObjectsLinked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRelationshipFactScope',
        tsPropertyName: 'relationshipFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetService',
        tsPropertyName: 'targetService',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationFactScope',
        tsPropertyName: 'destinationFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceFactScope',
        tsPropertyName: 'sourceFactScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimeoutSeconds',
        tsPropertyName: 'timeoutSeconds',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusPropertyName',
        tsPropertyName: 'statusPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationFactName',
        tsPropertyName: 'destinationFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRelationshipFactName',
        tsPropertyName: 'relationshipFactName',
        type: 'string',
        required: false
      }
    ];
  }


}
