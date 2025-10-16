import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGUserContext
 */
export class KGUserContext extends VITAL_Node {
  public readonly kGUserContextExperienceLevel?: string;
  public readonly kGUserContextCurrentDateTime?: string | Date;
  public readonly kGUserContextPronoun?: string;
  public readonly kGUserContextGender?: string;
  public readonly kGUserContextCurrentTimezone?: string;
  public readonly kGUserContextLightLevel?: number;
  public readonly kGUserContextAccountURI?: string;
  public readonly kGUserContextMood?: string;
  public readonly kGUserContextSoundLevel?: number;
  public readonly kGUserContextAccountLevel?: string;
  public readonly kGUserContextAgentFamiliarity?: string;
  public readonly kGUserContextLocation?: string;
  public readonly kGUserContextLoginURI?: string;
  public readonly kGUserContextAgentTone?: string;
  public readonly kGPlaceURI?: string;
  public readonly kGUserContextName?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGUserContext
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextExperienceLevel',
        tsPropertyName: 'kGUserContextExperienceLevel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextCurrentDateTime',
        tsPropertyName: 'kGUserContextCurrentDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextPronoun',
        tsPropertyName: 'kGUserContextPronoun',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextGender',
        tsPropertyName: 'kGUserContextGender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextCurrentTimezone',
        tsPropertyName: 'kGUserContextCurrentTimezone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextLightLevel',
        tsPropertyName: 'kGUserContextLightLevel',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAccountURI',
        tsPropertyName: 'kGUserContextAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextMood',
        tsPropertyName: 'kGUserContextMood',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextSoundLevel',
        tsPropertyName: 'kGUserContextSoundLevel',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAccountLevel',
        tsPropertyName: 'kGUserContextAccountLevel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAgentFamiliarity',
        tsPropertyName: 'kGUserContextAgentFamiliarity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextLocation',
        tsPropertyName: 'kGUserContextLocation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextLoginURI',
        tsPropertyName: 'kGUserContextLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextAgentTone',
        tsPropertyName: 'kGUserContextAgentTone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPlaceURI',
        tsPropertyName: 'kGPlaceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGUserContextName',
        tsPropertyName: 'kGUserContextName',
        type: 'string',
        required: false
      }
    ];
  }


}
