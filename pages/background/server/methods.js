Meteor.methods({
	
	"addBackground": function(url){
		PetProfile.update({_id:PetProfile.findOne({petid:Meteor.userId()})._id},{$set:{
				background:url,
		}})
	},

});