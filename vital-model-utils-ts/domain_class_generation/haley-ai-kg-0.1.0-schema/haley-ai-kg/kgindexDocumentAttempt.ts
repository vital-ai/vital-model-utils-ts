import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt
 */
export class KGIndexDocumentAttempt extends VITAL_Node {
  public readonly documentAttemptStatusCode?: number;
  public readonly documentOriginalURL?: string;
  public readonly documentAttemptDateTime?: string | Date;
  public readonly kGIndexDocumentAttemptStatusTypeURI?: string;
  public readonly documentCorrectedURL?: string;
  public readonly documentAttemptStatus?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGIndexDocumentAttempt
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatusCode',
        tsPropertyName: 'documentAttemptStatusCode',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL',
        tsPropertyName: 'documentOriginalURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptDateTime',
        tsPropertyName: 'documentAttemptDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentAttemptStatusTypeURI',
        tsPropertyName: 'kGIndexDocumentAttemptStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL',
        tsPropertyName: 'documentCorrectedURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatus',
        tsPropertyName: 'documentAttemptStatus',
        type: 'string',
        required: false
      }
    ];
  }


}
