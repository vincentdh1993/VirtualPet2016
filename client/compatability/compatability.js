// This folder runs before anything else because it is in the client folder

// Tracker.autorun tracks the session variables and anytime there is a change in the session variables, it runs the function
Tracker.autorun(function() {
	Session.set("latLong", Geolocation.latLng());
 	if(Session.get("latLong") !== null){
			Session.set("lat", Session.get("latLong").lat);
			Session.set("lng", Session.get("latLong").lng);
	}
	console.log(Session.get("latLong"));
 	Meteor.call("updatelatlng",Session.get("lng"),Session.get("lat"));
 })

// Session.setPersistent("background_url", "http://cdn.playbuzz.com/cdn/eb599698-41e1-4691-9ce6-4261b1b49f3a/86e41c53-bf8a-47f5-b509-5045c71c53b2.jpg");