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
		if(PetProfile.findOne({petid:this.userId}).petStatus.happiness >0){
			PetProfile.update({_id:PetProfile.findOne({petid:this.userId})._id},{$inc:{
				'petStatus.happiness': -1,
			}});
		}
	},

	"updateHealthGame": function(){
		PetProfile.update({_id:PetProfile.findOne({petid:this.userId})._id},{$inc:{
			'petStatus.happiness': -5,
		}});
	},

	"updateHealthFood": function(){
		if(PetProfile.findOne({petid:this.userId}).petStatus.happiness <101){
			PetProfile.update({_id:PetProfile.findOne({petid:this.userId})._id},{$inc:{
				'petStatus.happiness': 5,
			}});
		}
	},

	"setHealth": function(num){
		PetProfile.update({_id:PetProfile.findOne({petid:this.userId})._id},{$set:{
				'petStatus.happiness': num,
			}});
	},

})