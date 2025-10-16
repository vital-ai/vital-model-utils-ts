import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAlternateText
 */
export class HaleyAlternateText extends VITAL_Node {
  public readonly alternateLongDescription?: string;
  public readonly richText?: boolean;
  public readonly alternateText?: string;
  public readonly alternateDescription?: string;
  public readonly haleyAlternateTextType?: string;
  public readonly haleyLanguageType?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyAlternateText
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAlternateLongDescription',
        tsPropertyName: 'alternateLongDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRichText',
        tsPropertyName: 'richText',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAlternateText',
        tsPropertyName: 'alternateText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAlternateDescription',
        tsPropertyName: 'alternateDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAlternateTextType',
        tsPropertyName: 'haleyAlternateTextType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
