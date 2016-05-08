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
  eventType: attr('string'),
  ratCount: attr('number'),
  dirtyWaterCount: attr('number'),
  trashCount: attr('number'),
  healthScore: attr('number'),
  eventLocation: attr('string'),
  startDateTime: attr('string')

});