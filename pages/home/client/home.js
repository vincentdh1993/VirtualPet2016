Session.set("obj", null);
Session.set("transcript","");

// Session.set("latLong", Geolocation.currentLocation());

Tracker.autorun(function(){
	console.log(Session.get("latLong"));
});

// console.log(Session.get(""))
//  Tracker.autorun(function(){
//  console.log(Session.get("latLong"));
// })
var accessToken = "8fd67a24e6ae40bb81af0eabd4cec15b"; 
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";

var synth = window.speechSynthesis;	

var accessToken = "8fd67a24e6ae40bb81af0eabd4cec15b";
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";

var synth = window.speechSynthesis;


Template.home.onRendered(function () {


})

Template.home.helpers({
	userName: function(){
		return UserProfile.findOne().nickname;
	},

	petName: function(){
		return UserProfile.findOne().petname;
	}

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
      console.log("clicked it");

      $(".js-talk").html("Listening...");
   // https://shapeshed.com/html5-speech-recognition-api/
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-talk").html("Talk to Pet!");
          Session.set("transcript",event.results[0][0].transcript);
         
        	if(!(Session.get("transcript").includes("in"))){
          		execute(Session.get("transcript")); 
      		}else{
      			send();
      		}
      		
		};
		recognition.start();
   //      console.log("starting the recognizer")

    
   },

    "click .js-text": function(event){
    	send();
    },

    

})


function execute(transcript){
	if(transcript.includes("weather")){
		const lat = Session.get("lat");
		const lng = Session.get("lng");
	
		Meteor.call("getWeather", lat, lng,function(error,result){
			if (error) {
				console.log(error);
			}
			else {
				console.log(result);
				var utterThis = new SpeechSynthesisUtterance(result);
				voices = synth.getVoices();
				utterThis.voice = voices[44]; //61-82    61,64, 66, 67,  74 is top, 80, 22 weird singing
				utterThis.pitch = 1.3;
				utterThis.rate = 1;
				synth.speak(utterThis);
			}
		});
	}
	if(transcript.includes("jump")){
	// random weather generator
		document.getElementById('js-pet').src='images/fig1_jump.gif'
	}
	if(transcript.includes("game")||transcript.includes("break")||transcript.includes("dodge")){
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


// Template.map.onCreated(function() {
//   this.state = new ReactiveDict();
//   // this.state.set("latLng", Geolocation.latLng());
//    // this.map.set("lat",)
//    this.state.setDefault({
//      latLng: null,
//      // lat: 42,
//      // lng: -73,
//    });
// })

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
				//	setResponse(JSON.stringify(data, undefined, 2));
				//  r= JSON.parse(results);
				//	console.dir(data.result.speech);
			setResponse(data.result.speech);
			var utterThis = new SpeechSynthesisUtterance(data.result.speech);
		//	"ocp-apim-subscription-key": subscriptionKey
		},
		data: JSON.stringify({ q: text, lang: "en" }),	
		success: function(data) {
			//setResponse(JSON.stringify(data, undefined, 2));
				//  r= JSON.parse(results);
				//	console.dir(data.result.speech);
			console.dir(data);
			var url = data.result.resolvedQuery;
			console.dir(url);
			setResponse(data.result.speech);


			if(url.includes("YouTube")||url.includes("video")){
			window.open('https://www.youtube.com', '_blank');
			}
			if(url.includes("FaceBook")||url.includes("Facebook")){
			window.open('https://www.facebook.com', '_blank');
			}
			if(url.includes("Google")||url.includes("google")){
			window.open('https://www.google.com', '_blank');
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




			var utterThis = new SpeechSynthesisUtterance(data.result.speech);
			voices = synth.getVoices();

			utterThis.voice = voices[14]; //44, 12 drowning, 14 singing, 16,20
		//	utterThis.pitch = 2.2; //for 20
		//	utterThis.pitch = 1.3; //for 44
		//	utterThis.rate = 1.5; // for 20 
		//	utterThis.rate = 1;  //for 44

			synth.speak(utterThis);
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











