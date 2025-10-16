import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCodeDocument
 */
export class KGCodeDocument extends KGNode {
  public readonly kGCodeLanguageURI?: string;
  public readonly kGSourceCode?: string;
  public readonly kGCodeLanguageVersion?: string;
  public readonly kGCodeDocumentType?: string;
  public readonly kGCodeInterpreterVersion?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGCodeDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageURI',
        tsPropertyName: 'kGCodeLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSourceCode',
        tsPropertyName: 'kGSourceCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageVersion',
        tsPropertyName: 'kGCodeLanguageVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeDocumentType',
        tsPropertyName: 'kGCodeDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeInterpreterVersion',
        tsPropertyName: 'kGCodeInterpreterVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
