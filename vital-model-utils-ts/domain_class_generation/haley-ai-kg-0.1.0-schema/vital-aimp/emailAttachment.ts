import { FileNode } from '../vital/fileNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailAttachment
 */
export class EmailAttachment extends FileNode {
  public readonly internalID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for EmailAttachment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInternalID',
        tsPropertyName: 'internalID',
        type: 'string',
        required: false
      }
    ];
  }


}
