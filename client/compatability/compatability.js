// This folder runs before anything else because it is in the client folder

// Tracker.autorun tracks the session variables and anytime there is a change in the session variables, it runs the function
Tracker.autorun(function() {
	Session.set("latLong", Geolocation.latLng());
 	// console.log(Session.get("latLong"));
 	if(Session.get("latLong") !== null){
			Session.set("lat", Session.get("latLong").lat);
			Session.set("lng", Session.get("latLong").lng);
	}
 })