Session.set("obj", null);
Session.set("transcript","");
Session.set("maxR",50);
//Session.set("color",UserProfile.findOne().petName)


var accessToken = "5fa16e67ce0e42168a914552e3d85941";
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";
var synth = window.speechSynthesis;	

Template.game.onCreated(function() {
 	this.state = new ReactiveDict();
	this.state.setDefault({
   		 gameError:null,
       //instance.state.set("lastError","* "+ error.reason)
 	});
})

Template.home.helpers({

	gameErrorMessage: function() {
    	const instance = Template.instance();
    	return instance.state.get("gameError");
  	}

})


Template.game.events({
	"click .js-dodge": function(event,instance){
		if(PetProfile.findOne({petid:Meteor.userId()}).petStatus.happiness<5){
			instance.state.set("gameError","I am too hungry to play the game! I need to eat.");  

			var str_obj={
				str:instance.state.get("gameError"),
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
			Meteor.call("insertConversation",str_obj);

			speaking(instance.state.get("gameError"));
			Router.go("/");
		}else{
			Meteor.call("updateHealthGame");
			instance.state.set("gameError",null);
			Router.go("/newdodge");
		}	
	},

	"click .js-bricks": function(event,instance){
		if(PetProfile.findOne({petid:Meteor.userId()}).petStatus.happiness<5){
			instance.state.set("feedError","I am too hungry to play the game! I need to eat.");  

			var str_obj={
				str:instance.state.get("gameError"),
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
			Meteor.call("insertConversation",str_obj);

			speaking(instance.state.get("gameError"));
			Router.go("/");
		}else{
			Meteor.call("updateHealthGame");
			instance.state.set("gameError",null);
			Router.go("/brickbreak");
		}	
	},

	"click .js-shoot": function(event,instance){
		if(PetProfile.findOne({petid:Meteor.userId()}).petStatus.happiness<5){
			instance.state.set("gameError","I am too hungry to play the game! I need to eat."); 

			var str_obj={
				str:instance.state.get("gameError"),
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
				}
			Meteor.call("insertConversation",str_obj);
			

			speaking(instance.state.get("gameError"));
			Router.go("/");
		}else{
			Meteor.call("updateHealthGame");
			instance.state.set("gameError",null);
			Router.go("/shootghost");
		}	
	},

	"click .js-info": function(){
		$(".overlay").fadeToggle();
		$(".popup").fadeToggle();
		console.log("clicked");
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

			if(url.includes("game")||url.includes("break")||url.includes("game center")||url.includes("dodge")){
				speaking("You are in the game center");
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
			if(url.includes("homepage")||url.includes("home page")||url.includes("back to home")||url.includes("to home")){
			// random weather generator
				speaking("Going back to homepage");
				Router.go('/')
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
	utterThis.pitch = 1.3; 
	utterThis.rate = 1; 
	synth.speak(utterThis);
	
}
