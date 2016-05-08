import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  beforeModel() {
    this.store.pushPayload({
      rats: [
        {
          "park_borough" : "BRONX",
          "unique_key" : "15633897",
          "longitude" : "-73.89000626904053",
          "latitude" : "40.85551279775197"
        },
        {
          "park_borough" : "MANHATTAN",
          "unique_key" : "15633304",
          "longitude" : "-73.97698314758436",
          "latitude" : "40.74316088098852"
        },
        {
          "park_borough" : "BROOKLYN",
          "unique_key" : "15633599",
          "longitude" : "-73.98092864957985",
          "latitude" : "40.68890317557533"
        }
      ]  
    });
  }
});