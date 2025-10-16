import { KGNode } from './kgnode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAgentSubmission
 */
export class KGAgentSubmission extends KGNode {
  public readonly kGAgentSubmissionURL?: string;
  public readonly kGAgentSubmissionSubmitterEmail?: string;
  public readonly kGAgentSubmissionCreator?: string;
  public readonly kGAgentSubmissionSubmitterName?: string;
  public readonly kGAgentSubmissionReviewed?: boolean;
  public readonly kGAgentSubmissionType?: string;
  public readonly kGAgentSubmissionDescription?: string;
  public readonly kGAgentSubmissionName?: string;
  public readonly kGAgentSubmissionComments?: string;
  public readonly kGAgentSubmissionConverted?: boolean;
  public readonly kGAgentSubmissionDateTime?: string | Date;
  public readonly kGAgentSubmissionApproved?: boolean;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for KGAgentSubmission
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionURL',
        tsPropertyName: 'kGAgentSubmissionURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterEmail',
        tsPropertyName: 'kGAgentSubmissionSubmitterEmail',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionCreator',
        tsPropertyName: 'kGAgentSubmissionCreator',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionSubmitterName',
        tsPropertyName: 'kGAgentSubmissionSubmitterName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionReviewed',
        tsPropertyName: 'kGAgentSubmissionReviewed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionType',
        tsPropertyName: 'kGAgentSubmissionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDescription',
        tsPropertyName: 'kGAgentSubmissionDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionName',
        tsPropertyName: 'kGAgentSubmissionName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionComments',
        tsPropertyName: 'kGAgentSubmissionComments',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionConverted',
        tsPropertyName: 'kGAgentSubmissionConverted',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentSubmissionDateTime',
        tsPropertyName: 'kGAgentSubmissionDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGAgentSubmissionApproved',
        tsPropertyName: 'kGAgentSubmissionApproved',
        type: 'boolean',
        required: false
      }
    ];
  }


}
