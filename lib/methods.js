Meteor.methods({
	"updateLogoutTime":function(){
		var d = new Date;
		UserProfile.update({_id:UserProfile.findOne({uid:this.userId})._id},{$set:{lastLogout:d}});
	},

	"updateLoginTime":function(){
		var d = new Date;
		UserProfile.update({_id:UserProfile.findOne({uid:this.userId})._id},{$set:{lastLogin:d}});
	},

	"removeAllConversations":function(){
		Conversations.remove({});
	},

	"removeAllNeighbors":function(){
		PetMap.remove({});
	},

	"updatelatlng":function(lng,lat){
		PetMap.update({_id:PetMap.findOne({petid:this.userId})._id},{$set:{
			'location.coordinates': [lng,lat],
		}});
	},

	"updateHealth": function(){
		PetProfile.update({_id:PetProfile.findOne({petid:this.userId})._id},{$inc:{
			'petStatus.happiness': -1,
		}});
		// document.getElementById("myBar").style.width = PetProfile.findOne({petid:this.userId}).petStatus.happiness + '%';
		// console.log(document.getElementById("myBar").style.width);
	},

})