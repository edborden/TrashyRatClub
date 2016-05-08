import Ember from 'ember';

const {
  Route
} = Ember;

export default Ember.Route.extend({
  model(params) {
    return this.store.peekRecord('event', params.event_id);
  }
});