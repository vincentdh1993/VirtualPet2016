Template.login.onCreated(function() {
	this.state = new ReactiveDict();
	this.state.setDefault({
   		 lastError:null,
       //instance.state.set("lastError","* "+ error.reason)
 	});
});

Template.login.helpers({
	errorMessage: function() {
    	const instance = Template.instance();
    	return instance.state.get("lastError");
  	}
})

Template.login.events({
    'submit form': function(event,instance){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password,function(error){
			if (error) {
      			instance.state.set("lastError","* "+ error.reason);
      			console.log(instance.state.get("lastError"));
    		} else {
    			instance.state.set("lastError",null);
          Meteor.call("updateLoginTime");
   				Router.go('home');       	
    		}
		});
	},
});


        		