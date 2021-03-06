
Meteor.publish("theWeather",
	function(){
		return Weather.find();
	})

Meteor.publish("UserData",
	function(){
	if(this.userId){
		return Meteor.users.find({_id:this.userId},{fields:{profile:1,"services.google.email":1}});

	}else{
		this.ready();
	}
});

Meteor.publish("users", 
	function(){
 		return Meteor.users.find({},{fields:{profile:1}})
})

Meteor.publish("theUserProfile",
	function(){
	return UserProfile.find({uid:this.userId});
});

Meteor.publish("thePetProfile",
	function(){
	return PetProfile.find();
	//{petid:this.userId}
});

Meteor.publish("theConversations",
	function(){
	return Conversations.find({uid:this.userId});
});

Meteor.publish("thePetMap",
	function(){
	return PetMap.find();
});