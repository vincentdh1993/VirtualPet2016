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
    },
})

Template.register.events({
    'submit form': function(event,instance){
        event.preventDefault();
        const email = $(".js-email").val()
        const password =  $(".js-password").val()
        const nickname = $(".js-nickname").val()
        const petname =  $(".js-petname").val()
<<<<<<< HEAD
        const petshape = $(".carousel-inner").val();
=======
>>>>>>> origin/master

        var user = {
            email: email,
            password: password,
            nickname: nickname,
            petname:petname,
        }

        var pet = {
            usernickname: nickname,
            petname: petname,
        }

        Accounts.createUser(user,function(error){
            if (error) {
                instance.state.set("lastError","* "+ error.reason);
                console.log(instance.state.get("lastError"));
            } else {
                Meteor.call("addUserProf",user);
                Meteor.call("addPetProf",pet);
                Meteor.call("addToPetMap",petname,Session.get("latLong").lng,Session.get("latLong").lat);
                instance.state.set("lastError",null);
                Router.go('customize');
            }
        });
    },

});
