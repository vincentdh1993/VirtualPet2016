Session.set("counter",0);

Template.register.onCreated(function() {
    this.state = new ReactiveDict();
    this.state.setDefault({
         lastError:null,
         counter: 0,
         // background_url: "http://cdn.playbuzz.com/cdn/eb599698-41e1-4691-9ce6-4261b1b49f3a/86e41c53-bf8a-47f5-b509-5045c71c53b2.jpg"
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
  //   url: function(){
  //       const instance = Template.instance();
  //       return instance.state.get("background_url");
  // }
})

Template.register.events({
    'submit form': function(event,instance){
        event.preventDefault();
        const email = $(".js-email").val()
        const password =  $(".js-password").val()
        const nickname = $(".js-nickname").val()
        const petname =  $(".js-petname").val()
        const petshape = $(".carousel-inner").val();
        const testUrl = $("#sel1").val();
        var url = undefined;
        if(testUrl === "Castle Outside"){
            url = "http://cdn.playbuzz.com/cdn/eb599698-41e1-4691-9ce6-4261b1b49f3a/86e41c53-bf8a-47f5-b509-5045c71c53b2.jpg";
        }else if(testUrl === "Castle Inside"){
            url = "http://3.bp.blogspot.com/_QdHn8FT7SdY/TB8KE6WCa5I/AAAAAAAAJjY/6tW65dwOAAY/s1600/beast403left.jpg";
        }else{
            url = "http://wallpapercave.com/wp/CPBAeXS.jpg";
        }
        var pettype = calculate();
        console.log(pettype);
        
        var user = {
            email: email,
            password: password,
            nickname: nickname,
            petname:petname,

            pettype:pettype,
            background: url,
            // user: Meteor.userId(),

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
  "change #sel1": function(event, instance){ //dont have to call instance again because it is passed in
        const c = instance.$("#sel1").val();
        console.log("changed");
        // change the color field of the state object...
        if(c==="Castle Outside"){
            Session.setPersistent("background_url", "http://cdn.playbuzz.com/cdn/eb599698-41e1-4691-9ce6-4261b1b49f3a/86e41c53-bf8a-47f5-b509-5045c71c53b2.jpg");
            $("body").css("background", "url('"+Session.get("background_url")+"')");
        }
        if(c==="Castle Inside"){
            Session.setPersistent("background_url", "http://3.bp.blogspot.com/_QdHn8FT7SdY/TB8KE6WCa5I/AAAAAAAAJjY/6tW65dwOAAY/s1600/beast403left.jpg")
            $("body").css("background", "url('"+Session.get("background_url")+"')");        
        }
        if(c==="Enchanted Woods"){
            Session.setPersistent("background_url", "http://wallpapercave.com/wp/CPBAeXS.jpg");
            $("body").css("background", "url('"+Session.get("background_url")+"')");
        }
    },
});
