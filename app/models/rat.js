import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  // attributes
  latitude: attr('number'),
  longitude: attr('number'),
  parkBorough: attr('string')

});