import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#TagElement
 */
export class TagElement extends VITAL_Node {
  public readonly standaloneTag?: boolean;
  public readonly startPosition?: number;
  public readonly openingTag?: boolean;
  public readonly tagValue?: string;
  public readonly endPosition?: number;
  public readonly closingTag?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for TagElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isStandaloneTag',
        tsPropertyName: 'standaloneTag',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartPosition',
        tsPropertyName: 'startPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isOpeningTag',
        tsPropertyName: 'openingTag',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTagValue',
        tsPropertyName: 'tagValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndPosition',
        tsPropertyName: 'endPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isClosingTag',
        tsPropertyName: 'closingTag',
        type: 'boolean',
        required: false
      }
    ];
  }


}
