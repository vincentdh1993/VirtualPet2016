
Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
         Accounts.createUser({
            email: email,
            password: password,
            
        });
        Router.go('home');
    }
});

Template.register.onCreated(function() {
    this.state = new ReactiveDict();
    this.state.setDefault({
         lastError:null,
    });
});

Template.register.helpers({
    errorMessage: function() {
        const instance = Template.instance();
        return instance.state.get("lastError");
    }
})

Template.register.events({
    'submit form': function(event,instance){
        event.preventDefault();
        var user = {
            email: $('[name=email]').val(),
            password: $('[name=password]').val(),
        }
        Accounts.createUser(user,function(error){
            if (error) {
                instance.state.set("lastError","* "+ error.reason);
                console.log(instance.state.get("lastError"));
            } else {
                instance.state.set("lastError",null);
                Router.go('home');
                
            }
        });
    }
});

