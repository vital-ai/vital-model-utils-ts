import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#DatascriptRun
 */
export class DatascriptRun extends VITAL_Node {
  public readonly jobStatus?: string;
  public readonly scriptPath?: string;
  public readonly lastModifiedDate?: string | Date;
  public readonly jobID?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for DatascriptRun
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasJobStatus',
        tsPropertyName: 'jobStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasScriptPath',
        tsPropertyName: 'scriptPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastModifiedDate',
        tsPropertyName: 'lastModifiedDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasJobID',
        tsPropertyName: 'jobID',
        type: 'string',
        required: false
      }
    ];
  }


}
