Template.chat.events({
	"onsubmit #usermsg": function(){
		console.log("here");
		console.log($("#usermsg").val());
	}
})