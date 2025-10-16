import { DialogPart } from './dialogPart.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogCondition
 */
export class DialogCondition extends DialogPart {
  public readonly factScope?: string;
  public readonly propertyValue?: string;
  public readonly propertyName?: string;
  public readonly subpropertyEnabled?: boolean;
  public readonly conditionType?: string;
  public readonly comparator?: string;
  public readonly subpropertyName?: string;
  public readonly expression?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DialogCondition
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSubpropertyEnabled',
        tsPropertyName: 'subpropertyEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionType',
        tsPropertyName: 'conditionType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasComparator',
        tsPropertyName: 'comparator',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubpropertyName',
        tsPropertyName: 'subpropertyName',
        type: 'string',
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
