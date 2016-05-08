import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';
import computed from 'ember-computed-decorators';

export default ActiveModelAdapter.extend({

  // crossdomain
  ajax(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    return this._super(url, method, hash);
  },

  // attributes
  host: config.apiHostName,

  @computed
  headers() {
    return {
      'Authorization': 'bearer RDkyMzJGRDA5QjpzY3JpcHRyOkIwNjZERTc3QkJCNzQzMDA5QkJGOEVDMTEzN0UwODQx'
    };
  }

});