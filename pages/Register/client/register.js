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
        const email = $(".js-email").val()
        const password =  $(".js-password").val()
        const nickname = $(".js-nickname").val()
        const petname =  $(".js-petname").val()
        const petshape = $(".carousel-inner").val();
        
        var user = {
            email: email,
            password: password,
            nickname: nickname,
            petshape:petshape,
            petname:petname,
        }
        Accounts.createUser(user,function(error){
            if (error) {
                instance.state.set("lastError","* "+ error.reason);
                console.log(instance.state.get("lastError"));
            } else {
                Meteor.call("addUserProf",user);
                instance.state.set("lastError",null);
                Router.go('home');
                
            }
        });
    }
});

