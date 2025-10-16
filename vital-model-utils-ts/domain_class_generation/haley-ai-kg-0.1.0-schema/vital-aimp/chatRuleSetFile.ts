import { FileNode } from '../vital/fileNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatRuleSetFile
 */
export class ChatRuleSetFile extends FileNode {
  public readonly md5checksum?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ChatRuleSetFile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMd5checksum',
        tsPropertyName: 'md5checksum',
        type: 'string',
        required: false
      }
    ];
  }


}
