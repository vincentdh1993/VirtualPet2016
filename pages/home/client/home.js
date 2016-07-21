Session.set("obj",null);
Session.set("transcript","");

Tracker.autorun(function(){
	console.log(Session.get("latLong"));
});

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
			}
		  Meteor.call("insertConversation",str_obj);
          send();
        };
		recognition.start();
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
			setResponse(data.result.speech);
			var utterThis = new SpeechSynthesisUtterance(data.result.speech);
		},
		data: JSON.stringify({ q: text, lang: "en" }),	
		success: function(data) {
			console.dir(data)
			setResponse(data.result.speech);
			var str_obj={
				str:data.result.speech,
				createdAt: new Date(),
				from: "pet",
				uid: Meteor.userId() ,
			}
			Meteor.call("insertConversation",str_obj);
			var utterThis = new SpeechSynthesisUtterance(data.result.speech);
			voices = synth.getVoices();
			utterThis.voice = voices[44]; 
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












