Session.set("obj", null);
Session.set("transcript","");
Session.set("maxR",50);
//Session.set("color",UserProfile.findOne().petName)


var accessToken = "5fa16e67ce0e42168a914552e3d85941";
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";
var synth = window.speechSynthesis; 

Template.customize.helpers({

})

Template.customize.onRendered(function() {
    var pet = PetProfile.findOne({petid:Meteor.userId()});
      document.getElementById('face').style.backgroundColor = pet.facecolor;
      document.getElementById('eyeball1').style.backgroundColor = pet.eyeballcolor;
      document.getElementById('iris1').style.borderColor = pet.iriscolor;
      document.getElementById('iris1').style.backgroundColor = pet.pupilscolor;
      document.getElementById('eyeball2').style.backgroundColor = pet.eyeballcolor;
      document.getElementById('iris2').style.borderColor = pet.iriscolor;
      document.getElementById('iris2').style.backgroundColor = pet.pupilscolor;
      document.getElementById('mouth').style.backgroundColor = pet.mouthcolor;
      document.getElementById('tounge').style.backgroundColor = pet.mouthcolor;
      document.getElementById('leg1').style.backgroundColor = pet.legonecolor;
      document.getElementById('leg2').style.backgroundColor = pet.legtwocolor;
      document.getElementById('leg3').style.backgroundColor = pet.legthreecolor;
      document.getElementById('leg4').style.backgroundColor = pet.legfourcolor;
      document.getElementById('leg5').style.backgroundColor = pet.legfivecolor;

})


Template.customize.events({
  "click .js-updateColorScheme": function(){
      console.dir(PetProfile.findOne({petid:Meteor.userId()}))
      Router.go("home");
  },

  "click .js-defaultColorScheme": function(){
     document.getElementById("face").style.backgroundColor="white"
     document.getElementById("eyeball1").style.backgroundColor="white"
     document.getElementById("eyeball2").style.backgroundColor="white"
     document.getElementById("iris1").style.borderColor="#214F72"
     document.getElementById("iris2").style.borderColor="#214F72"
     document.getElementById("iris1").style.backgroundColor="#20282F"
     document.getElementById("iris2").style.backgroundColor="#20282F"
     document.getElementById("mouth").style.backgroundColor="#F7B4B4"
     document.getElementById("tounge").style.backgroundColor="#F7B4B4"
     document.getElementById("leg1").style.backgroundColor="white"
     document.getElementById("leg2").style.backgroundColor="white"
     document.getElementById("leg3").style.backgroundColor="white"
     document.getElementById("leg4").style.backgroundColor="white"
     document.getElementById("leg5").style.backgroundColor="white"
      Meteor.call("addfacecolor","white")
      Meteor.call("addeyeballcolor","white")
      Meteor.call("addiriscolor","#214F72")
      Meteor.call("addpupilscolor","#20282F")
      Meteor.call("addmouthcolor","#F7B4B4")
      Meteor.call("addlegonecolor","white")
      Meteor.call("addlegtwocolor","white")
      Meteor.call("addlegthreecolor","white")
      Meteor.call("addlegfourcolor","white")
      Meteor.call("addlegfivecolor","white")
      console.dir(PetProfile.findOne({petid:Meteor.userId()}))
  },

  "click .js-redface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="red"
    Meteor.call("addfacecolor","red")
  },

  "click .js-orangeface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="orange"
    Meteor.call("addfacecolor","orange")
  },

"click .js-yellowface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="yellow"
    Meteor.call("addfacecolor","yellow")
  },

"click .js-greenface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="green"
    Meteor.call("addfacecolor","green")
  },

"click .js-blueface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="blue"
    Meteor.call("addfacecolor","blue")
  },

"click .js-navyface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="navy"
    Meteor.call("addfacecolor","navy")
  },

"click .js-purpleface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="purple"
    Meteor.call("addfacecolor","purple")
  },

"click .js-whiteface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="white"
    Meteor.call("addfacecolor","white")
  },

"click .js-blackface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="black"
    Meteor.call("addfacecolor","black")
  },

"click .js-grayface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="gray"
    Meteor.call("addfacecolor","gray")
  },

"click .js-lightblueface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="lightblue"
    Meteor.call("addfacecolor","lightblue")
  },


  //eyeball@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//



	"click .js-redeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="red";
    box2.style.backgroundColor="red";
    Meteor.call("addeyeballcolor","red")
  },

  "click .js-orangeeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";
    Meteor.call("addeyeballcolor","orange")
  },

"click .js-yelloweyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="yellow";
    box2.style.backgroundColor="yellow";
    Meteor.call("addeyeballcolor","yellow")
  },

"click .js-greeneyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="green";
    box2.style.backgroundColor="green";
    Meteor.call("addeyeballcolor","green")
  },

"click .js-blueeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="blue";
    box2.style.backgroundColor="blue";
    Meteor.call("addeyeballcolor","blue")
  },

"click .js-navyeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="navy";
    box2.style.backgroundColor="navy";
    Meteor.call("addeyeballcolor","navy")
  },

"click .js-purpleeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="purple";
    box2.style.backgroundColor="purple";
    Meteor.call("addeyeballcolor","purple")
  },

"click .js-whiteeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="white";
    box2.style.backgroundColor="white";
    Meteor.call("addeyeballcolor","white")
  },

"click .js-blackeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="black";
    box2.style.backgroundColor="black";
    Meteor.call("addeyeballcolor","black")
  },

"click .js-grayeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="gray";
    box2.style.backgroundColor="gray";
    Meteor.call("addeyeballcolor","gray")
  },

"click .js-lightblueeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="lightblue";
    box2.style.backgroundColor="lightblue";
    Meteor.call("addeyeballcolor","lightblue")
  },

//@@@@@@@@@@@@@@@@@@@@@@@--------------iris----------------------------------

"click .js-rediris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="red";
    box2.style.borderColor="red";
    Meteor.call("addiriscolor","red")
  },

  "click .js-orangeiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="orange";
    box2.style.borderColor="orange";
    Meteor.call("addiriscolor","orange")
  },

"click .js-yellowiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="yellow";
    box2.style.borderColor="yellow";
    Meteor.call("addiriscolor","yellow")
  },

"click .js-greeniris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="green";
    box2.style.borderColor="green";
    Meteor.call("addiriscolor","green")
  },

"click .js-blueiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="blue";
    box2.style.borderColor="blue";
    Meteor.call("addiriscolor","blue")
  },

"click .js-navyiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="navy";
    box2.style.borderColor="navy";
    Meteor.call("addiriscolor","navy")
  },

"click .js-purpleiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="purple";
    box2.style.borderColor="purple";
    Meteor.call("addiriscolor","purple")
  },

"click .js-whiteiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="white";
    box2.style.borderColor="white";
    Meteor.call("addiriscolor","white")
  },

"click .js-blackiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="black";
    box2.style.borderColor="black";
    Meteor.call("addiriscolor","black")
  },

"click .js-grayiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="gray";
    box2.style.borderColor="gray";
    Meteor.call("addiriscolor","gray")
  },

"click .js-lightblueiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="lightblue";
    box2.style.borderColor="lightblue";
    Meteor.call("addiriscolor","lightblue")
  },


  //------------------------------pupils

"click .js-redpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="red";
    box2.style.backgroundColor="red";
    Meteor.call("addpupilscolor","red")
  },

  "click .js-orangepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";
    Meteor.call("addpupilscolor","orange")
  },

"click .js-yellowpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="yellow";
    box2.style.backgroundColor="yellow";
    Meteor.call("addpupilscolor","yellow")
  },

"click .js-greenpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="green";
    box2.style.backgroundColor="green";
    Meteor.call("addpupilscolor","green")
  },

"click .js-bluepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="blue";
    box2.style.backgroundColor="blue";
    Meteor.call("addpupilscolor","blue")
  },

"click .js-navypupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="navy";
    box2.style.backgroundColor="navy";
    Meteor.call("addpupilscolor","navy")
  },

"click .js-purplepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="purple";
    box2.style.backgroundColor="purple";
    Meteor.call("addpupilscolor","purple")
  },

"click .js-whitepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="white";
    box2.style.backgroundColor="white";
    Meteor.call("addpupilscolor","white")
  },

"click .js-blackpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="black";
    box2.style.backgroundColor="black";
    Meteor.call("addpupilscolor","black")
  },

"click .js-graypupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="gray";
    box2.style.backgroundColor="gray";
    Meteor.call("addpupilscolor","gray")
  },

"click .js-lightbluepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="lightblue";
    box2.style.backgroundColor="lightblue";
    Meteor.call("addpupilscolor","lightblue")
  },



  //----------------------------------------------------mouth-----------------
"click .js-redmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="red";
    box2.style.backgroundColor="red";
    Meteor.call("addmouthcolor","red")
  },

  "click .js-orangemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";
    Meteor.call("addmouthcolor","orange")
  },

"click .js-yellowmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="yellow";
    box2.style.backgroundColor="yellow";
    Meteor.call("addmouthcolor","yellow")
  },

"click .js-greenmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="green";
    box2.style.backgroundColor="green";
    Meteor.call("addmouthcolor","green")
  },

"click .js-bluemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="blue";
    box2.style.backgroundColor="blue";
    Meteor.call("addmouthcolor","blue")
  },

"click .js-navymouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="navy";
    box2.style.backgroundColor="navy";
    Meteor.call("addmouthcolor","navy")
  },

"click .js-purplemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="purple";
    box2.style.backgroundColor="purple";
    Meteor.call("addmouthcolor","purple")
  },

"click .js-pinkmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="#F7B4B4";
    box2.style.backgroundColor="#F7B4B4";
    Meteor.call("addmouthcolor","#F7B4B4")
  },

"click .js-blackmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="black";
    box2.style.backgroundColor="black";
    Meteor.call("addmouthcolor","black")
  },

"click .js-graymouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="gray";
    box2.style.backgroundColor="gray";
    Meteor.call("addmouthcolor","gray")
  },

"click .js-lightbluemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="lightblue";
    box2.style.backgroundColor="lightblue";
    Meteor.call("addmouthcolor","lightblue")
  },


  //--------------------------------------------leg1.............

  "click .js-redleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="red"
    Meteor.call("addlegonecolor"," red ")
  },

  "click .js-orangeleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="orange"
    Meteor.call("addlegonecolor"," orange ")
  },

"click .js-yellowleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="yellow"
    Meteor.call("addlegonecolor"," yellow ")
  },

"click .js-greenleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="green"
    Meteor.call("addlegonecolor"," green ")
  },

"click .js-blueleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="blue"
    Meteor.call("addlegonecolor"," blue ")
  },

"click .js-navyleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="navy"
    Meteor.call("addlegonecolor"," navy ")
  },

"click .js-purpleleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="purple"
    Meteor.call("addlegonecolor"," purple ")
  },

"click .js-whiteleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="white"
    Meteor.call("addlegonecolor"," white ")
  },

"click .js-blackleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="black"
    Meteor.call("addlegonecolor"," black ")
  },

"click .js-grayleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="gray"
    Meteor.call("addlegonecolor"," gray ")
  },

"click .js-lightblueleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="lightblue"
    Meteor.call("addlegonecolor"," lightblue ")
  },



//===============================================leg2


   "click .js-redleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="red"
    Meteor.call("addlegtwocolor"," red ")
  },

  "click .js-orangeleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="orange"
    Meteor.call("addlegtwocolor"," orange ")
  },

"click .js-yellowleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="yellow"
    Meteor.call("addlegtwocolor"," yellow ")
  },

"click .js-greenleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="green"
    Meteor.call("addlegtwocolor"," green ")
  },

"click .js-blueleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="blue"
    Meteor.call("addlegtwocolor"," blue ")
  },

"click .js-navyleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="navy"
    Meteor.call("addlegtwocolor"," navy ")
  },

"click .js-purpleleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="purple"
    Meteor.call("addlegtwocolor"," purple ")
  },

"click .js-whiteleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="white"
    Meteor.call("addlegtwocolor"," white ")
  },

"click .js-blackleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="black"
    Meteor.call("addlegtwocolor"," black ")
  },

"click .js-grayleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="gray"
    Meteor.call("addlegtwocolor"," gray ")
  },

"click .js-lightblueleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="lightblue"
    Meteor.call("addlegtwocolor"," lightblue ")
  },



//============leg3
    "click .js-redleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="red"
    Meteor.call("addlegthreecolor"," red ")
  },

  "click .js-orangeleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="orange"
    Meteor.call("addlegthreecolor"," orange ")
  },

"click .js-yellowleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="yellow"
    Meteor.call("addlegthreecolor"," yellow ")
  },

"click .js-greenleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="green"
    Meteor.call("addlegthreecolor"," green ")
  },

"click .js-blueleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="blue"
    Meteor.call("addlegthreecolor"," blue ")
  },

"click .js-navyleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="navy"
    Meteor.call("addlegthreecolor"," navy ")
  },

"click .js-purpleleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="purple"
    Meteor.call("addlegthreecolor"," purple ")
  },

"click .js-whiteleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="white"
    Meteor.call("addlegthreecolor"," white ")
  },

"click .js-blackleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="black"
    Meteor.call("addlegthreecolor"," black ")
  },

"click .js-grayleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="gray"
    Meteor.call("addlegthreecolor"," gray ")
  },

"click .js-lightblueleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="lightblue"
    Meteor.call("addlegthreecolor"," lightblue ")
  },



  //==========leg4

  "click .js-redleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="red"
    Meteor.call("addlegfourcolor"," red ")
  },

  "click .js-orangeleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="orange"
    Meteor.call("addlegfourcolor"," orange ")
  },

"click .js-yellowleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="yellow"
    Meteor.call("addlegfourcolor"," yellow ")
  },

"click .js-greenleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="green"
    Meteor.call("addlegfourcolor"," green ")
  },

"click .js-blueleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="blue"
    Meteor.call("addlegfourcolor"," blue ")
  },

"click .js-navyleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="navy"
    Meteor.call("addlegfourcolor"," navy ")
  },

"click .js-purpleleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="purple"
    Meteor.call("addlegfourcolor"," purple ")
  },

"click .js-whiteleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="white"
    Meteor.call("addlegfourcolor"," white ")
  },

"click .js-blackleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="black"
    Meteor.call("addlegfourcolor"," black ")
  },

"click .js-grayleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="gray"
    Meteor.call("addlegfourcolor"," gray ")
  },

"click .js-lightblueleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="lightblue"
    Meteor.call("addlegfourcolor"," lightblue ")
  },


//========================leg5

 "click .js-redleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="red"
    Meteor.call("addlegfivecolor"," red ")
  },

  "click .js-orangeleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="orange"
    Meteor.call("addlegfivecolor"," orange ")
  },

"click .js-yellowleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="yellow"
    Meteor.call("addlegfivecolor"," yellow ")
  },

"click .js-greenleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="green"
    Meteor.call("addlegfivecolor"," green ")
  },

"click .js-blueleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="blue"
    Meteor.call("addlegfivecolor"," blue ")
  },

"click .js-navyleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="navy"
    Meteor.call("addlegfivecolor"," navy ")
  },

"click .js-purpleleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="purple"
    Meteor.call("addlegfivecolor"," purple ")
  },

"click .js-whiteleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="white"
    Meteor.call("addlegfivecolor"," white ")
  },

"click .js-blackleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="black"
    Meteor.call("addlegfivecolor"," black ")
  },

"click .js-grayleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="gray"
    Meteor.call("addlegfivecolor"," gray ")
  },

"click .js-lightblueleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="lightblue"
    Meteor.call("addlegfivecolor"," lightblue ")
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
         
          if(!(Session.get("transcript").includes("in")) && Session.get("transcript").includes("weather")){
              var str_obj={
        str:Session.get("transcript"),
        createdAt: new Date(),
        from: "user",
        uid: Meteor.userId() ,
        pic: "/images/profile_pic/user_profile_pic.png"
        }
          Meteor.call("insertConversation",str_obj);
          execute(Session.get("transcript"));
            }else{
              var str_obj={
          str:Session.get("transcript"),
          createdAt: new Date(),
          from: "user",
          uid: Meteor.userId() ,
          pic: "/images/profile_pic/user_profile_pic.png"
        }
          Meteor.call("insertConversation",str_obj);
          send();
           }          
          
    };
    recognition.start();
  },







});

function execute(transcript){
  const lat = Session.get("lat");
  const lng = Session.get("lng");

  if(transcript.includes("tomorrow")){
    Meteor.call("getTomorrowsWeather", lat, lng, function(error, result){
      if (error) {
        console.log(error);
      }
      else {
        console.log(result);
        var str_obj={
        str:result,
        createdAt: new Date(),
        from: "pet",
        uid: Meteor.userId() ,
        pic: "/images/profile_pic/ghost_profile_pic.png"
        }
        Meteor.call("insertConversation",str_obj);
        speaking(result);
      }
    })
  }else { //(transcript.includes("weather"))
    Meteor.call("getWeather", lat, lng, function(error,result){
      if (error) {
        console.log(error);
      }
      else {
        console.log(result);
        if(result.includes("cloud")){
          document.getElementById('js-pet').src='images/weather/cloudy.gif'
          console.log("hello");
        }
        var str_obj={
        str:result,
        createdAt: new Date(),
        from: "pet",
        uid: Meteor.userId() ,
        pic: "/images/profile_pic/ghost_profile_pic.png"
        }
        Meteor.call("insertConversation",str_obj);
        speaking(result);
      }
    });
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
// url part +navigation
      console.dir(data);
      var url = data.result.resolvedQuery;
      if(url.includes("YouTube")||url.includes("video")){
      var n = url.startsWith("Search") || url.startsWith("search");
        if (n == true){
          console.log(n);
          var a = url.search("on YouTube");
          console.log(a);
          var search = url.substring(7,a);
          console.log(search);
          window.open('https://www.youtube.com/results?search_query='+search, '_blank');

        } else{
          window.open('https://www.youtube.com', '_blank');
        }
      }

      if(url.includes("FaceBook")||url.includes("Facebook")){
      window.open('https://www.facebook.com', '_blank');
      }

      if(url.includes("Google")||url.includes("google")){
      //window.open('https://www.google.com', '_blank');
      var n = url.startsWith("Search") || url.startsWith("search");
      var a = url.startsWith("Search for") || url.startsWith("search for");
      var s = url.startsWith("Google") || url.startsWith("google");
        if (n == true){
          console.log(n);
          var a = url.search("on Google");
          console.log(a);
          var search = url.substring(7,a);
          console.log(search);
          window.open('https://www.google.com/#q='+search, '_blank');

        } else if(s==true){
          var a = url.length;
          var search = url.substring(7,a);
          console.log(search);
          window.open('https://www.google.com/#q='+search, '_blank');
        } else if(a==true){
          var a = url.search("on Google");
          var search = url.substring(11,a);
          window.open('https://www.google.com/#q='+search, '_blank');
        }

        else{
          window.open('https://www.google.com', '_blank');
        }
      }

      if(url.includes("gmail")||url.includes("Gmail")){
      window.open('https://www.gmail.com', '_blank');
      }
      if(url.includes("GitHub")||url.includes("github")){
      window.open('https://www.github.com', '_blank');
      }
      if(url.includes("Yahoo")||url.includes("yahoo")){
      window.open('https://www.yahoo.com', '_blank');
      }
      if(url.includes("Baidu")||url.includes("baidu")){
      window.open('https://www.baidu.com', '_blank');
      }

      if(url.includes("jump")){
      // random weather generator
        document.getElementById('js-pet').src='images/fig1_jump.gif'
      }
      if(url.includes("game")||url.includes("break")||url.includes("Game Center")||url.includes("dodge")){
        Router.go('/gamecenter')
      }
      if(url.includes("dashboard")){
      // random weather generator
        Router.go('/dashboard')
      }

      if(url.includes("my name")||url.includes("who I am")||url.includes("who am I")){
        var str = "Your name is "+ UserProfile.findOne().nickname;
        var str_obj={
            str:str,
            createdAt: new Date(),
            from: "pet",
            uid: Meteor.userId() ,
            pic: "/images/profile_pic/ghost_profile_pic.png"
        }
        console.log(str)
        Meteor.call("insertConversation",str_obj);
        speaking(str);
      } else if(url.includes("your name")||url.includes("who are you")||url.includes("who you are")){
        var str = "My name is "+ UserProfile.findOne().petname;
        var str_obj={
            str:str,
            createdAt: new Date(),
            from: "pet",
            uid: Meteor.userId() ,
            pic: "/images/profile_pic/ghost_profile_pic.png"
        }
        console.log(str)
        Meteor.call("insertConversation",str_obj);
        speaking(str);
      }else{
        setResponse(data.result.speech);// conversation part
        var str_obj={
          str:data.result.speech,
          createdAt: new Date(),
          from: "pet",
          uid: Meteor.userId() ,
          pic: "/images/profile_pic/ghost_profile_pic.png"
        }
        Meteor.call("insertConversation",str_obj);
        speaking(data.result.speech);

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


function speaking(str){
  var utterThis = new SpeechSynthesisUtterance(str);
  voices = synth.getVoices();
  utterThis.voice = voices[44]; 
  utterThis.pitch = 1.3; 
  utterThis.rate = 1; 

  synth.speak(utterThis);
 
}



