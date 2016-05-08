import LeafletMap from 'trashy-rat-club/components/leaflet-map';

export default LeafletMap.extend({

  zoomControl: false,
  attributionControl: false,

  init() {
    this._super();
    if (this.get('initialCenter')) {
      this.set('center', this.get('initialCenter'));
      this.set('zoom', this.get('initialZoom'));
    }
  }

});