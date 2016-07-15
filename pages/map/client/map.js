var MAP_ZOOM = 15;
// var lat_Lng = Geolocation.latLng();

Template.map.helpers({  
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
    var latLng = Geolocation.latLng();
    // Initialize the map once we have the latLng.
    if (GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: MAP_ZOOM
      };
    }
  },
  latLong: function(){
	const instance = Template.instance();
  	instance.state.set("latLng", Geolocation.latLng());
  	var lat_Lng = instance.state.get("latLng");
  	if(lat_Lng !== null){
  		return lat_Lng;
  	}
  },
  // longitude: function(){
  	
  // 	const instance = Template.instance();
  // 	instance.state.set("latLng", Geolocation.latLng());
  // 	var lat_Lng = instance.state.get("latLng");
  // 	console.log(lat_Lng)
  // 	if(lat_Lng !== null){
  // 		return lat_Lng.lng;
  // 	}

  // }
});

Template.map.onCreated(function() {
  this.state = new ReactiveDict();
  // this.state.set("latLng", Geolocation.latLng());
   // this.map.set("lat",)
   this.state.setDefault({
     latLng: null,
     // lat: 42,
     // lng: -73,
   });
});