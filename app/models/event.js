import DS from 'ember-data';
import computed from 'ember-computed-decorators';

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
  startDateTime: attr('string'),

  @computed
  proportions() {
    return {
      columns: [
        ['Rats', this.get('ratCount')],
        ['Trash', this.get('trashCount')],
        ['Water', this.get('dirtyWaterCount')]
      ],
      type: 'donut'
    }
  }

});