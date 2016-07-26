Session.set("counter",0);


Template.register.onCreated(function() {
    this.state = new ReactiveDict();
    this.state.setDefault({
         lastError:null,
         counter: 0,
    });
});

Template.register.helpers({
    errorMessage: function() {
        const instance = Template.instance();
        return instance.state.get("lastError");
    },
    email: function(){
        return $('div.carousel-inner .item').children("img").get(0).height;
    },
    theCounter: function(){
    const instance = Template.instance();
    return Session.get("counter");
  },
})

Template.register.events({
    'submit form': function(event,instance){
        event.preventDefault();
        const email = $(".js-email").val()
        const password =  $(".js-password").val()
        const nickname = $(".js-nickname").val()
        const petname =  $(".js-petname").val()
        const petshape = $(".carousel-inner").val();
        var pettype = calculate();
        console.log(pettype);
        
        var user = {
            email: email,
            password: password,
            nickname: nickname,
            petname:petname,
        }

        var pet = {
            petname: petname,
            facecolor:'white',
            eyeballcolor:'white',
            iriscolor: 'white',

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
    },
    "click .js-right": function(event,instance){
    const c = Session.get("counter");
    Session.set("counter",c+1);
    },
    "click .js-left": function(event,instance){
    const c = Session.get("counter");
    Session.set("counter",c-1);
  },
});
