import Ember from 'ember';

const {
  Controller
} = Ember;

export default Ember.Controller.extend({
  config: {
    labels: false,
    legend: {
      show: false
    }
  }
});