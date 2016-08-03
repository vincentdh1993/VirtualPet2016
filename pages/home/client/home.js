Session.set("obj", null);
Session.set("transcript","");
Session.set("maxR",50);

var accessToken = "5fa16e67ce0e42168a914552e3d85941";
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";
var synth = window.speechSynthesis;	

Template.home.onCreated(function() {
 	this.state = new ReactiveDict();
	this.state.setDefault({
   		 feedError:null,
 	});
})

Template.home.onRendered(function() {
	  console.dir(PetProfile.findOne({petid:Meteor.userId()}));
	  var pet = PetProfile.findOne({petid:Meteor.userId()});
      document.getElementById('face').style.backgroundColor = pet.facecolor;
      document.getElementById('eyeball1').style.backgroundColor = pet.eyeballcolor;
      document.getElementById('irisandpupils1').style.borderColor = pet.iriscolor;
      document.getElementById('irisandpupils1').style.backgroundColor = pet.pupilscolor;
      document.getElementById('eyeball2').style.backgroundColor = pet.eyeballcolor;
      document.getElementById('irisandpupils2').style.borderColor = pet.iriscolor;
      document.getElementById('irisandpupils2').style.backgroundColor = pet.pupilscolor;
      document.getElementById('mouth').style.backgroundColor = pet.mouthcolor;
      document.getElementById('toungh').style.backgroundColor = pet.mouthcolor;
      document.getElementById('foot1').style.backgroundColor = pet.legonecolor;
      document.getElementById('foot2').style.backgroundColor = pet.legtwocolor;
      document.getElementById('foot3').style.backgroundColor = pet.legthreecolor;
      document.getElementById('foot4').style.backgroundColor = pet.legfourcolor;
      document.getElementById('foot5').style.backgroundColor = pet.legfivecolor;
})

Template.showNeighbors.onRendered(function() {
	  var url = document.URL;
	  var id = url.substring(url.lastIndexOf('/') + 1); 
	  console.dir(PetProfile.findOne({petid:id}));
	  var pet = PetProfile.findOne({petid:id});
      document.getElementById('face').style.backgroundColor = pet.facecolor;
      document.getElementById('eyeball1').style.backgroundColor = pet.eyeballcolor;
      document.getElementById('irisandpupils1').style.borderColor = pet.iriscolor;
      document.getElementById('irisandpupils1').style.backgroundColor = pet.pupilscolor;
      document.getElementById('eyeball2').style.backgroundColor = pet.eyeballcolor;
      document.getElementById('irisandpupils2').style.borderColor = pet.iriscolor;
      document.getElementById('irisandpupils2').style.backgroundColor = pet.pupilscolor;
      document.getElementById('mouth').style.backgroundColor = pet.mouthcolor;
      document.getElementById('toungh').style.backgroundColor = pet.mouthcolor;
      document.getElementById('foot1').style.backgroundColor = pet.legonecolor;
      document.getElementById('foot2').style.backgroundColor = pet.legtwocolor;
      document.getElementById('foot3').style.backgroundColor = pet.legthreecolor;
      document.getElementById('foot4').style.backgroundColor = pet.legfourcolor;
      document.getElementById('foot5').style.backgroundColor = pet.legfivecolor;
})


Template.showNeighbors.events({
	"click .js-gohome": function(){
		Router.go("/");
	},

}),

Template.home.helpers({

	userName: function(){
		return this.nickname;
	},
	petName: function(){
		return this.petname;
	},
	lastlogin: function(){
		return this.lastLogin;
	},
	lastlogout: function(){
		return this.lastLogout;
	},
	showtime: function(){
		var d = new Date;
		var elapsed = d - this.lastLogin;
		var newdate = new Date(elapsed).toISOString().substr(11, 8);
		return newdate;
	},
	showtalk: function(){
		return Conversations.find({},{sort:{createdAt:-1}, limit:30});
	},
	nearbypet: function(){
		// PetMap._ensureIndex( { 'location': "2dsphere" } ); only aviliable on server collections
		return PetMap.find({ 
					 location :
                         { $near :
                           { $geometry :
                              { type : 'Point' ,
                                coordinates : [Session.get("lng"), Session.get("lat")] ,
                     		  },
                     		 $maxDistance : Session.get("maxR"), /*<distance in meters>*/
                     	   }
                     	 }
                    })
	},

	range:function(){
		return Session.get("maxR")
	},

	health:function(){
		return PetProfile.findOne({petid:Meteor.userId()}).petStatus.happiness
	},

	feedErrorMessage: function() {
    	const instance = Template.instance();
    	return instance.state.get("feedError");
  	}
})


Template.home.events({
	"click .js-health": function(){
		$(".healthbar").fadeToggle();
	},

	"click .js-feed":function(event,instance){
		if(PetProfile.findOne({petid:Meteor.userId()}).petStatus.happiness<96){
			Meteor.call("updateHealthFood");
			var str_obj={
				str:"Thanks!",
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
			Meteor.call("insertConversation",str_obj);
			speaking("Thanks");
			instance.state.set("feedError",null);
		}else if(PetProfile.findOne({petid:Meteor.userId()}).petStatus.happiness<100){
			Meteor.call("setHealth",100);
			var str_obj={
				str:"Thanks!",
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
			}
			Meteor.call("insertConversation",str_obj);
			speaking("Thanks");
			instance.state.set("feedError",null);
		}else{
			instance.state.set("feedError","I am full, I can't eat any more!"); 
			var str_obj={
				str:instance.state.get("feedError"),
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
			Meteor.call("insertConversation",str_obj);
			speaking(instance.state.get("feedError"));
		}
	},

	"click .js-searchR": function(){
		Session.set("maxR",$(".js-maxr").val())
		$(".js-maxr").val("");
	},

	"click .js-info": function(){
		$(".overlay").fadeToggle();
		$(".popup").fadeToggle();
	},

	"click .js-close-popup": function(){
		$(".overlay").fadeToggle();
		$(".popup").fadeToggle();
	},


	"click .js-submit-text":function(){
		Session.set("transcript",$(".js-contents").val());
		if(!(Session.get("transcript").includes("in")) && Session.get("transcript").includes("weather")){
          		var str_obj={
				str:Session.get("transcript"),
				createdAt: new Date(),
				from: "user",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/user_profile_pic.png"
				}
		  		Meteor.call("insertConversation",str_obj);
		  		execute(Session.get("transcript"));
            }else{
	           	var str_obj={
					str:Session.get("transcript"),
					createdAt: new Date(),
					from: "user",
					uid: Meteor.userId() ,
					pic: "/images/profile_pic/user_profile_pic.png"
				}
		  		Meteor.call("insertConversation",str_obj);
		  		send();
           } 
        $(".js-contents").val("");

	},

	"click .js-talk": function(event){
	  console.log("clicked it");
	  $(".js-talk").html("Listening...");
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-talk").html("Talk to Pet!");
          Session.set("transcript",event.results[0][0].transcript);
         
        	if(!(Session.get("transcript").includes("in")) && Session.get("transcript").includes("weather")){
          		var str_obj={
				str:Session.get("transcript"),
				createdAt: new Date(),
				from: "user",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/user_profile_pic.png"
				}
		  		Meteor.call("insertConversation",str_obj);
		  		execute(Session.get("transcript"));
            }else{
	           	var str_obj={
					str:Session.get("transcript"),
					createdAt: new Date(),
					from: "user",
					uid: Meteor.userId() ,
					pic: "/images/profile_pic/user_profile_pic.png"
				}
		  		Meteor.call("insertConversation",str_obj);
		  		send();
           }      	  
          
    };
		recognition.start();
	},

})


function execute(transcript){
	const lat = Session.get("lat");
	const lng = Session.get("lng");

	if(transcript.includes("tomorrow")){
		Meteor.call("getTomorrowsWeather", lat, lng, function(error, result){
			if (error) {
				console.log(error);
			}
			else {
				console.log(result);
				var str_obj={
				str:result,
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
				Meteor.call("insertConversation",str_obj);
				speaking(result);
			}
		})
	}else { //(transcript.includes("weather"))
		Meteor.call("getWeather", lat, lng, function(error,result){
			if (error) {
				console.log(error);
			}
			else {
				console.log(result);
				if(result.includes("cloud")){
					document.getElementById('js-pet').src='images/weather/cloudy.gif'
					console.log("hello");
				}
				var str_obj={
				str:result,
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
				Meteor.call("insertConversation",str_obj);
				speaking(result);
			}
		});
	}

}

function send() {
	var text =  Session.get("transcript");
	$.ajax({
		type: "POST",
		url: baseUrl + "query/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
			"Authorization": "Bearer " + accessToken,
			"ocp-apim-subscription-key": subscriptionKey
		},
		data: JSON.stringify({ q: text, lang: "en" }),	
		success: function(data) {
// url part +navigation
			console.dir(data);
			if(data.result.speech!=""){
				setResponse(data.result.speech);// conversation part
				var str_obj={
					str:data.result.speech,
					createdAt: new Date(),
					from: "pet",
					uid: Meteor.userId() ,
					pic: "/images/profile_pic/ghost_profile_pic.png"
				}
				Meteor.call("insertConversation",str_obj);
				speaking(data.result.speech);
			}else{

			var url = data.result.resolvedQuery;
			if(url.includes("YouTube")||url.includes("video")){
			var n = url.startsWith("Search") || url.startsWith("search");
				if (n == true){
					console.log(n);
					var a = url.search("on YouTube");
					console.log(a);
					var search = url.substring(7,a);
					console.log(search);
					speaking("Openning Youtube in a new window.");
					window.open('https://www.youtube.com/results?search_query='+search, '_blank');

				} else{
					speaking("Openning Youtube in a new window.");
					window.open('https://www.youtube.com', '_blank');
				}
			}

			if(url.includes("FaceBook")||url.includes("Facebook")){
			window.open('https://www.facebook.com', '_blank');
			}

			if(url.includes("Google")||url.includes("google")){
			//window.open('https://www.google.com', '_blank');
			var n = url.startsWith("Search") || url.startsWith("search");
			var a = url.startsWith("Search for") || url.startsWith("search for");
			var s = url.startsWith("Google") || url.startsWith("google");
				if (n == true){
					console.log(n);
					var a = url.search("on Google");
					console.log(a);
					var search = url.substring(7,a);
					console.log(search);
					window.open('https://www.google.com/#q='+search, '_blank');

				} else if(s==true){
					var a = url.length;
					var search = url.substring(7,a);
					console.log(search);
					window.open('https://www.google.com/#q='+search, '_blank');
				} else if(a==true){
					var a = url.search("on Google");
					var search = url.substring(11,a);
					window.open('https://www.google.com/#q='+search, '_blank');
				}

				else{
					window.open('https://www.google.com', '_blank');
				}
			}

			if(url.includes("gmail")||url.includes("Gmail")){
			window.open('https://www.gmail.com', '_blank');
			}
			if(url.includes("GitHub")||url.includes("github")){
			window.open('https://www.github.com', '_blank');
			}
			if(url.includes("Yahoo")||url.includes("yahoo")){
			window.open('https://www.yahoo.com', '_blank');
			}
			if(url.includes("Baidu")||url.includes("baidu")){
			window.open('https://www.baidu.com', '_blank');
			}

			if(url.includes("game")||url.includes("break")||url.includes("Game Center")||url.includes("dodge")){
				speaking("Going to game center");
				Router.go('/gamecenter')
			}
			if(url.includes("dashboard")){
			// random weather generator
				speaking("Going to dashboard");
				Router.go('/dashboard')
			}
			if(url.includes("customize your color")){
			// random weather generator
				speaking("Going to customize center");
				Router.go('/customize')
			}
			if(url.includes("your color")){
			// random weather generator
				speaking("You can change my color in customize center");
				Router.go('/customize')
			}


			if(url.includes("my name")||url.includes("who I am")||url.includes("who am I")){
				var str = "Your name is "+ UserProfile.findOne().nickname;
				var str_obj={
						str:str,
						createdAt: new Date(),
						from: "pet",
						uid: Meteor.userId() ,
						pic: "/images/profile_pic/ghost_profile_pic.png"
				}
				console.log(str)
				Meteor.call("insertConversation",str_obj);
				speaking(str);
			}
			if(url.includes("your name")||url.includes("who are you")||url.includes("who you are")){
				var str = "My name is "+ UserProfile.findOne().petname;
				var str_obj={
						str:str,
						createdAt: new Date(),
						from: "pet",
						uid: Meteor.userId() ,
						pic: "/images/profile_pic/ghost_profile_pic.png"
				}
				console.log(str)
				Meteor.call("insertConversation",str_obj);
				speaking(str);
			}

		}



		},
		error: function() {
			setResponse("Internal Server Error");
		}
  });
		setResponse("Loading...");
}


 function setResponse(val) {
 	$("#response").text(val);
 }


function speaking(str){
	var utterThis = new SpeechSynthesisUtterance(str);
	voices = synth.getVoices();
	utterThis.voice = voices[44]; 
	utterThis.pitch = 1.1 ; 
	utterThis.rate = 1; 
	utterThis.onstart = function(event){
		$('.js-talk').attr('disabled','disabled');
		document.getElementById("mouth").style.WebkitAnimation = "talking 0.8s ease-in-out infinite"
		document.getElementById("mouth").style.animation = "talking 0.8s ease-in-out infinite";
		document.getElementById("toungh").style.WebkitAnimation = "openmounth 0s ease-in-out infinite"
		document.getElementById("toungh").style.animation = "openmounth 0s ease-in-out infinite"
	}
	synth.speak(utterThis);
	utterThis.onend = function(event){
		$('.js-talk').removeAttr('disabled');
		document.getElementById("mouth").style.WebkitAnimation = "talking 0s ease-in-out infinite"
		document.getElementById("mouth").style.animation = "talking 0s ease-in-out infinite";
		document.getElementById("toungh").style.WebkitAnimation = "openmounth 2s ease-in-out infinite"
		document.getElementById("toungh").style.animation = "openmounth 2s ease-in-out infinite"
	}
}





