import { VitalSignsPropertyDefinition } from '../core/vital-signs-object';
import { VITAL_Node_Base } from '../core/vital-node-base';

class TestNode extends VITAL_Node_Base {
  public name?: string;
  constructor() { super(); }
  override getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [{ propertyURI: 'http://vital.ai/ontology/vital-core#hasName', tsPropertyName: 'name', type: 'string', required: false }];
  }
}

const T = 'http://vital.ai/ontology/test#TestNode';

describe('Serialization round-trip', () => {
  it('toJSON -> fromJSON preserves URI, vitaltype, properties', () => {
    const n = new TestNode();
    n.URI = 'urn:t1'; n.vitaltype = T; n.name = 'Alice';
    const json = n.toJSON();
    expect(json['URI']).toBe('urn:t1');
    expect(json['type']).toBe(T);

    const r = new TestNode();
    r.fromJSON(json);
    expect(r.URI).toBe('urn:t1');
    expect(r.vitaltype).toBe(T);
    expect(r.name).toBe('Alice');
  });

  it('fromJSON reads short type key', () => {
    const r = new TestNode();
    r.fromJSON({ URI: 'urn:t2', type: T, 'http://vital.ai/ontology/vital-core#hasName': 'Bob' });
    expect(r.URI).toBe('urn:t2');
    expect(r.vitaltype).toBe(T);
    expect(r.name).toBe('Bob');
  });

  it('toMap -> fromMap preserves URI key', () => {
    const n = new TestNode();
    n.URI = 'urn:t3'; n.vitaltype = T; n.name = 'Eve';
    const map = n.toMap();
    expect(map.get('URI')).toBe('urn:t3');

    const r = new TestNode();
    r.fromMap(map);
    expect(r.URI).toBe('urn:t3');
    expect(r.vitaltype).toBe(T);
    expect(r.name).toBe('Eve');
  });
});
