Template.registerorlogin.onRendered(function(){
	if(Meteor.user()){
		var pet = PetProfile.findOne({petid:Meteor.userId()});
		if(pet.background !== undefined || pet.background !== null){
      		$("body").css("background", "url('"+pet.background+"')");
		}
	}
 	// Session.setPersistent("background_url", "url('http://cdn.playbuzz.com/cdn/eb599698-41e1-4691-9ce6-4261b1b49f3a/86e41c53-bf8a-47f5-b509-5045c71c53b2.jpg')");
});