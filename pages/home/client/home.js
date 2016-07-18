Session.set("obj",null);
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



Template.home.events({
	"click .js-pet": function(){
		console.log("clicked");

	},

	"click .js-submit-comment":function(){
		if($(".js-contents").val()=="jump"){
			document.getElementById('js-pet').src='images/fig1_jump.gif'
			console.log("hi click");
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
         
         send();
          
//	      execute(Session.get("transcript")); 
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
	
		console.log("lat: "+ lat);
		console.log("lng: "+ lng);
 		
 		Meteor.apply("getWeather",lat, lng, {returnStubValue: true},
      	function(error,result){

        	console.dir(['getWeather',error,result]);
        	r = JSON.parse(result);
        	console.dir(r);
        	// return instance.state.set("recipes",r.results);
      });
		// Session.set("obj",Weather.findOne({rnd:{$gte:Math.random()*6+1}}));
		// console.dir( Session.get("obj"));
		// document.getElementById('js-pet').src= Session.get("obj").imgsrc
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
			console.dir(data)
			setResponse(data.result.speech);

			var utterThis = new SpeechSynthesisUtterance(data.result.speech);
			voices = synth.getVoices();
			utterThis.voice = voices[61]; //61-82    
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











