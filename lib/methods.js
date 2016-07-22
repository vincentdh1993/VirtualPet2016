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


})