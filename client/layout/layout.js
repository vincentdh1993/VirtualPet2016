Template.layout.onRendered(function(){
	// if(Session.get("background_url") === null || Session.get("background_url") === undefined){
	// 	$("body").css("background", "url('http://cdn.playbuzz.com/cdn/eb599698-41e1-4691-9ce6-4261b1b49f3a/86e41c53-bf8a-47f5-b509-5045c71c53b2.jpg')");
	// }else{
	// 	$("body").css("background", "url('"+Session.get("background_url")+"')");
	// }
	
});

Template.layout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.call("updateLogoutTime");
        Meteor.logout();
        Router.go('registerorlogin');
    }
});





Template.layout.helpers({

	userName: function(){
		return UserProfile.findOne().nickname;
	},
	petName: function(){
		return UserProfile.findOne().petname;
	},
	lastlogin: function(){
		return UserProfile.findOne().lastLogin;
	},
	lastlogout: function(){
		return UserProfile.findOne().lastLogout;
	},
	showtime: function(){
		var d = new Date;
		var elapsed = d - UserProfile.findOne().lastLogin;
		var newdate = new Date(elapsed).toISOString().substr(11, 8);
		return newdate;
	},
	background_url: function(){
		return Session.get("background_url");
	}
})