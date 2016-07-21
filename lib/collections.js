Conversations = new Meteor.Collection("conversations");
Comments = new Meteor.Collection("comments");
Weather = new Meteor.Collection("weathers");
UserProfile = new Meteor.Collection("userprofile");

// UserProfile.insert({
// 			email: user.email, uid:Meteor.userId(), nickname:user.nickname, 
// 			CreatedAt: d , lastLogin: d , lastLogout: d,
// 			pettype:"",
// 			petname:user.petname,
// 			petStatus:{
// 				health: 100, happiness:100, lv:1, exp:0, lastTimeFed: d, 
// 			}
// 		});