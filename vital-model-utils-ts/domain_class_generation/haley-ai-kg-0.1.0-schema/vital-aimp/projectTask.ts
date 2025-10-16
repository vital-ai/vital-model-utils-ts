import { AIMPThing } from './aimpthing.js';
import { VitalSignsPropertyDefinition } from 'vital-model-utils-ts';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProjectTask
 */
export class ProjectTask extends AIMPThing {
  public readonly priority?: number;
  public readonly shortDescription?: string;
  public readonly pecrentComplete?: number;
  public readonly projectTag?: string;
  public readonly dueDate?: string | Date;

  constructor(uri: string, vitaltype: string) {
    super(uri, vitaltype);

  }

  /**
   * Get property definitions for ProjectTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPriority',
        tsPropertyName: 'priority',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPecrentComplete',
        tsPropertyName: 'pecrentComplete',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProjectTag',
        tsPropertyName: 'projectTag',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDueDate',
        tsPropertyName: 'dueDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
