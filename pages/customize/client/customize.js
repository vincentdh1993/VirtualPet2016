Template.customize.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    shape: "img-circle"

  });
  console.dir(this.state);
});


Template.customize.helpers({

	theImage: function(){
    const instance = Template.instance();
    const c = instance.state.get("image");
    return c;
 	},

 	theShape: function(){
    const instance = Template.instance();
    const c = instance.state.get("shape");
    return c;
 	},
	
	userName: function() {
    return Meteor.user().profile.name;  
  	},

  	userEmail: function() {
    return Meteor.user().emails[0].address;
  	},
})


Template.customize.events({

	"change .js-color": function(event, instance){
		const c = instance.$(".js-color").val();
		instance.state.set("color",c);
	},


	




});


