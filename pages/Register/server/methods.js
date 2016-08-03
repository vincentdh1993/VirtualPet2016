Meteor.methods({
	
	"addUserProf":function(user){
		var d = new Date()
		UserProfile.insert({
			email: user.email, uid:Meteor.userId(), nickname:user.nickname, 
			CreatedAt: d , lastLogin: d , lastLogout: d,
			petname:user.petname,
		});
	},

	"addPetProf":function(pet){
		var d = new Date()
		PetProfile.insert({
			petid:Meteor.userId(),
			usernickname: pet.usernickname,
            petname: pet.petname,
            facecolor:'white',
            eyeballcolor:'white',
            iriscolor: '#214F72',
            pupilscolor:'black',
            mouthcolor:'pink',
            legonecolor:"white",
            legtwocolor:"white",
            legthreecolor:"white",
            legfourcolor:"white",
            legfivecolor:"white",
            petlat:pet.petlat,
            petlng:pet.petlng,
			petStatus:{
				health: 100, happiness:100, lv:1, exp:0, lastTimeFed: d, 
			}

		});
	},

	"addToPetMap":function(name,lng,lat){
		PetMap.insert({
			location: {
      			type: "Point",
      			coordinates: [lng,lat],
   			},
   			petname:name,
   			petid:Meteor.userId(),
		});
	}


})
