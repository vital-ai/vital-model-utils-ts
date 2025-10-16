import { VITAL_Node } from '../vital-core/vitalNode.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalDataScript
 */
export class VitalDataScript extends VITAL_Node {
  public readonly lastModifiedDate?: string | Date;
  public readonly scriptPath?: string;
  public readonly regularScript?: boolean;
  public readonly vitalDataScriptBody?: string;
  public readonly appID?: string;
  public readonly organizationID?: string;
  public readonly adminScript?: boolean;
  public readonly lastCompilationError?: string;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for VitalDataScript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastModifiedDate',
        tsPropertyName: 'lastModifiedDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasScriptPath',
        tsPropertyName: 'scriptPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isRegularScript',
        tsPropertyName: 'regularScript',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalDataScriptBody',
        tsPropertyName: 'vitalDataScriptBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasAppID',
        tsPropertyName: 'appID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasOrganizationID',
        tsPropertyName: 'organizationID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isAdminScript',
        tsPropertyName: 'adminScript',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastCompilationError',
        tsPropertyName: 'lastCompilationError',
        type: 'string',
        required: false
      }
    ];
  }


}
