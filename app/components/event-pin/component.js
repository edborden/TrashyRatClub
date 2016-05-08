import computed from 'ember-computed-decorators';
import MarkerLayer from 'trashy-rat-club/components/marker-layer';

const EventMarker = L.Icon.extend({

  options: {
    iconSize: [25, 25],
    popupAnchor: [12, 0]
  },

  initialize(options) {
    options = L.Util.setOptions(this, options);
  },

  createIcon() {
    let div = document.createElement('div');
    div.className = 'event-marker';
    div.innerHTML = this._createInner();
    return div;
  },

  _createInner() {
    return this.options.score;
  }

});

export default MarkerLayer.extend({

  // attributes
  icon: null,
  event: null,

  // events
  init() {
    this._super();
    let score = this.get('event').get('healthScore');
    let icon = new EventMarker({ score });
    this.set('icon', icon);
  },

  didCreateLayer() {
    // this._super(...arguments);
    if (this.get('hasBlock')) {
      this._popup = this.L.popup({}, this._layer);
      this._popup.setContent(this.get('destinationElement'));
      // register popup on leaflet layer so it can be accessed by spiderfier, don't want it to be called normally
      this._layer.bindPopup(this._popup);
      this._layer._popup = this._popup;

      this._hijackPopup();

      this.popupOpenDidChange();
    }
  },

  willDestroyLayer() {
    // this._super(...arguments);
    if (this.get('hasBlock')) {
      this._layer.closePopup();
      this._layer.unbindPopup();
      delete this._popup;
      delete this._firstNode;
      delete this._lastNode;
    }
  }

});