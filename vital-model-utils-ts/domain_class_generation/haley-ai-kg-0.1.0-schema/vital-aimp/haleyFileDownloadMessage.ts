import { HaleyMessage } from './haleyMessage.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyFileDownloadMessage
 */
export class HaleyFileDownloadMessage extends HaleyMessage {
  public readonly fileScope?: string;
  public readonly fileType?: string;
  public readonly fileLength?: number;
  public readonly fileURL?: string;
  public readonly fileName?: string;
  public readonly fileNodeURI?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for HaleyFileDownloadMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileScope',
        tsPropertyName: 'fileScope',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/vital#hasFileURL',
        tsPropertyName: 'fileURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasFileName',
        tsPropertyName: 'fileName',
        type: 'string',
        required: false
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
