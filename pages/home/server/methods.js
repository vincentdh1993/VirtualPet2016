Meteor.methods({
	"insertConversation":function(str_obj){
		Conversations.insert(str_obj);
	},

})