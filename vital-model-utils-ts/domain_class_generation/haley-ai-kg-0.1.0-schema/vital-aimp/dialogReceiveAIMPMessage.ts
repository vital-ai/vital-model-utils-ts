import { DialogAction } from './dialogAction.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogReceiveAIMPMessage
 */
export class DialogReceiveAIMPMessage extends DialogAction {
  public readonly timeoutEnabled?: boolean;
  public readonly propertyName?: string;
  public readonly consumeImmediately?: boolean;
  public readonly graphObjectsLinked?: boolean;
  public readonly inputPropertyName?: string;
  public readonly interruptedFactName?: string;
  public readonly timeoutSeconds?: number;
  public readonly timeoutPropertyName?: string;
  public readonly ignoreStandardIntents?: boolean;
  public readonly expression?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogReceiveAIMPMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTimeoutEnabled',
        tsPropertyName: 'timeoutEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isConsumeImmediately',
        tsPropertyName: 'consumeImmediately',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked',
        tsPropertyName: 'graphObjectsLinked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInputPropertyName',
        tsPropertyName: 'inputPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInterruptedFactName',
        tsPropertyName: 'interruptedFactName',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimeoutPropertyName',
        tsPropertyName: 'timeoutPropertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIgnoreStandardIntents',
        tsPropertyName: 'ignoreStandardIntents',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExpression',
        tsPropertyName: 'expression',
        type: 'string',
        required: false
      }
    ];
  }


}
