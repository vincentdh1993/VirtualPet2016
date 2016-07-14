Session.set("obj",null);
Session.set("transcript","");

// Template.home.helpers({
// 	routeToLogReg: function(){
// 		Router.go('registerorlogin');
// 	}

// })

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
          $(".js-talk").html("Talk");
          console.log(event.results[0][0].transcript);
          Session.set("transcript",event.results[0][0].transcript);
          console.log(event.results[0][0].confidence);   
	      execute(Session.get("transcript")); 
          console.log("done");
        };
		recognition.start();
        console.log("starting the recognizer")
    },

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











