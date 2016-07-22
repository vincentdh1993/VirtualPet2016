Session.set("obj", null);
Session.set("transcript","");

Tracker.autorun(function(){
	console.log(Session.get("latLong"));
});
var accessToken = "8fd67a24e6ae40bb81af0eabd4cec15b";
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";
var synth = window.speechSynthesis;	

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
		// var d = new Date;
		// var elapsed = d - this.lastLogin;
		// var newdate = new Date(elapsed).toISOString().substr(11, 8);
		// return newdate;
	},
	showtalk: function(){
		return Conversations.find({});
	},
})


Template.home.events({
	"click .js-pet": function(){
		console.log("clicked");

	},

	"click .js-submit-comment":function(){
		if($(".js-contents").val()=="jump"){
			document.getElementById('js-pet').src='images/fig1_jump.gif'
			console.log("hi click");
			Meteor.call("getWeather",Session.get("latLong").lat,Session.get("latLong").lng);
		}else if($(".js-contents").val()=="stop"){
			document.getElementById('js-pet').src='images/fig1.png'
		}else if($(".js-contents").val()=="i love you"){
			document.getElementById('js-pet').src='images/fig1_jump.gif'
		}else if($(".js-contents").val()=="who wants a cookie"){
			document.getElementById('js-pet').src='images/fig1_evolution_hands_wave.gif'
		}
		execute($(".js-contents").val()); 
	},

	"click .js-talk": function(event){
		//Meteor.call("removeAllConversations");
      console.log("clicked it");
	  $(".js-talk").html("Listening...");
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-talk").html("Talk to Pet!");
          Session.set("transcript",event.results[0][0].transcript);
          var str_obj={
			str:Session.get("transcript"),
			createdAt: new Date(),
			from: "user",
			uid: Meteor.userId() ,
			pic: "/images/profile_pic/user_profile_pic.png"
			}
		  Meteor.call("insertConversation",str_obj);
		  if(!(Session.get("transcript").includes("in"))&& Session.get("transcript").includes("weather")){
          		execute(Session.get("transcript")); 
      	  }
      	  send();
      	  
          
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

	if(transcript.includes("jump")){
	// random weather generator
		document.getElementById('js-pet').src='images/fig1_jump.gif'
	}
	if(transcript.includes("game")||transcript.includes("break")||transcript.includes("Game Center")||transcript.includes("dodge")){
		Router.go('/gamecenter')
	}
	if(transcript.includes("dashboard")){
	// random weather generator
		Router.go('/dashboard')
	}
	if(transcript.includes("youtube")||transcript.includes("video")){
		window.open('https://www.youtube.com', '_blank');
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
			var url = data.result.resolvedQuery;
			if(url.includes("YouTube")||url.includes("video")){
			var n = url.startsWith("Search") || url.startsWith("search");
				if (n == true){
					console.log(n);
					var a = url.search("on YouTube");
					console.log(a);
					var search = url.substring(7,a);
					console.log(search);
					window.open('https://www.youtube.com/results?search_query='+search, '_blank');

				} else{
					window.open('https://www.youtube.com', '_blank');
				}
			}

			if(url.includes("FaceBook")||url.includes("Facebook")){
			window.open('https://www.facebook.com', '_blank');
			}

			if(url.includes("Google")||url.includes("google")){
			//window.open('https://www.google.com', '_blank');
			var n = url.startsWith("Search") || url.startsWith("search");
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

// conversation part
			
			setResponse(data.result.speech);
			var str_obj={
				str:data.result.speech,
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
				pic: "/images/profile_pic/ghost_profile_pic.png"
			}
			Meteor.call("insertConversation",str_obj);
			speaking(data.result.speech);
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
		document.getElementById("toungh").style.WebkitAnimation = "openmounth 10s ease-in-out infinite"
		document.getElementById("toungh").style.animation = "openmounth 10s ease-in-out infinite"
	}
}





