import Ember from 'ember';
import ratsData from 'trashy-rat-club/utils/rats';
import watersData from 'trashy-rat-club/utils/waters';
import trashesData from 'trashy-rat-club/utils/trashes';

const {
  Route
} = Ember;

export default Route.extend({
  beforeModel() {
    this.store.pushPayload({
      rats: ratsData,
      waters: watersData,
      trashes: trashesData
    });
  }
});