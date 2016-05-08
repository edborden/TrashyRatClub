import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(typeHash, hash) {
    hash['eventType'] = hash['event_type'];
    delete hash['event_type'];
    hash['id'] = hash['event_id'];
    delete hash['event_id'];
    hash['latitude'] = hash['lat'];
    delete hash['lat'];
    hash['longitude'] = hash['lng'];
    delete hash['lng'];
    hash['name'] = hash['event_name'];
    delete hash['event_name'];
    return this._super(typeHash, hash);
  }
});