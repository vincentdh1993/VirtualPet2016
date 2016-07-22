Meteor.methods({
	
	"addUserProf":function(user){
		var d = new Date()
		UserProfile.insert({
			email: user.email, uid:Meteor.userId(), nickname:user.nickname, 
			CreatedAt: d , lastLogin: d , lastLogout: d,
			pettype:"",
			CreatedAt: d , lastLogin: d , 
			pettype:user.pettype,
			petname:user.petname,
			petStatus:{
				health: 100, happiness:100, lv:1, exp:0, lastTimeFed: d, 
			}
		});
	}

})
