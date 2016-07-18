Session.set("obj",null);
Session.set("transcript","");
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
        };
		recognition.start();
   },

    "click .js-text": function(event){
    	send();
    }

})


function execute(transcript){
	if(transcript.includes("weather")){
	// random weather generator
		Session.set("obj",Weather.findOne({rnd:{$gte:Math.random()*6+1}}));
		console.dir( Session.get("obj"));
		document.getElementById('js-pet').src= Session.get("obj").imgsrc
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

function send() {
	var text =  Session.get("transcript");
	$.ajax({
		type: "POST",
		url: baseUrl + "query/",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
			"Authorization": "Bearer " + accessToken,
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











