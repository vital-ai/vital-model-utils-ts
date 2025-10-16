import { Answer } from './answer.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FileAnswer
 */
export class FileAnswer extends Answer {
  public readonly url?: string;
  public readonly deleteOnSuccess?: boolean;
  public readonly fileType?: string;
  public readonly fileLength?: number;
  public readonly fileName?: string;
  /** URI reference to one of: Contract, Account, Document, Folder */
  public readonly parentObjectURI?: http://vital.ai/ontology/vital-aimp#Contract | http://vital.ai/ontology/vital#Account | http://vital.ai/ontology/vital-nlp#Document | http://vital.ai/ontology/vital-aimp#Folder;
  public readonly fileNodeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for FileAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDeleteOnSuccess',
        tsPropertyName: 'deleteOnSuccess',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileType',
        tsPropertyName: 'fileType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileLength',
        tsPropertyName: 'fileLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileName',
        tsPropertyName: 'fileName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParentObjectURI',
        tsPropertyName: 'parentObjectURI',
        type: 'http://vital.ai/ontology/vital-aimp#Contract | http://vital.ai/ontology/vital#Account | http://vital.ai/ontology/vital-nlp#Document | http://vital.ai/ontology/vital-aimp#Folder',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFileNodeURI',
        tsPropertyName: 'fileNodeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
