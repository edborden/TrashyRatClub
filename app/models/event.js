import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  // attributes
  latitude: attr('number'),
  longitude: attr('number'),
  name: attr('string'),
  eventType: attr('string')

});