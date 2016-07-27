Meteor.methods({
	
	"addfacecolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				facecolor:color,
		}})
	},

	"addeyeballcolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				eyeballcolor:color,
		}})
	},

	"addiriscolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				iriscolor:color,
		}})
	},

	"addpupilscolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				pupilscolor:color,
		}})
	},

	"addmouthcolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				mouthcolor:color,
		}})
	},

	"addlegonecolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				legonecolor:color,
		}})
	},

	"addlegtwocolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				legtwocolor:color,
		}})
	},

	"addlegthreecolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				legthreecolor:color,
		}})
	},

	"addlegfourcolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				legfourcolor:color,
		}})
	},

	"addlegfivecolor":function(color){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				legfivecolor:color,
		}})
	},



})