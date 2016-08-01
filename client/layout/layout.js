Template.layout.onRendered(function(){

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

Meteor.setInterval(function(){
  		// var pet = PetProfile.findOne({petid:Meteor.userId()});
  		Meteor.call("updateHealth");
  		// document.getElementById("myBar").style.width = PetProfile.findOne({petid:this.userId}).petStatus.happiness + '%';		
}, 120000);



