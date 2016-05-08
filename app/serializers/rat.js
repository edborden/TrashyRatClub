import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(typeHash, hash) {
    hash['parkBorough'] = hash['park_borough'];
    delete hash['park_borough'];
    hash['id'] = hash['unique_key'];
    delete hash['unique_key'];
    return this._super(typeHash, hash);
  }
});