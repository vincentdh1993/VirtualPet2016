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

  "click .js-redface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="red"
  },

  "click .js-orangeface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="orange"
  },

"click .js-yellowface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="yellow"
  },

"click .js-greenface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="green"
  },

"click .js-blueface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="blue"
  },

"click .js-navyface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="navy"
  },

"click .js-purpleface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="purple"
  },

"click .js-whiteface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="white"
  },

"click .js-blackface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="black"
  },

"click .js-grayface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="gray"
  },

"click .js-lightblueface": function bgRed(){
    var box = document.getElementById("face");
    box.style.backgroundColor="lightblue"
  },


  //eyeball@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//



	"click .js-redeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="red";
    box2.style.backgroundColor="red";
  },

  "click .js-orangeeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";
  },

"click .js-yelloweyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="yellow";
    box2.style.backgroundColor="yellow";
  },

"click .js-greeneyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="green";
    box2.style.backgroundColor="green";
  },

"click .js-blueeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="blue";
    box2.style.backgroundColor="blue";
  },

"click .js-navyeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="navy";
    box2.style.backgroundColor="navy";
  },

"click .js-purpleeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="purple";
    box2.style.backgroundColor="purple";
  },

"click .js-whiteeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="white";
    box2.style.backgroundColor="white";
  },

"click .js-blackeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="black";
    box2.style.backgroundColor="black";
  },

"click .js-grayeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="gray";
    box2.style.backgroundColor="gray";
  },

"click .js-lightblueeyeball": function bgRed(){
    var box = document.getElementById("eyeball1");
    var box2 = document.getElementById("eyeball2");
    box.style.backgroundColor="lightblue";
    box2.style.backgroundColor="lightblue";
  },

//@@@@@@@@@@@@@@@@@@@@@@@--------------iris----------------------------------

"click .js-rediris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="red";
    box2.style.borderColor="red";
  },

  "click .js-orangeiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="orange";
    box2.style.borderColor="orange";
  },

"click .js-yellowiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="yellow";
    box2.style.borderColor="yellow";
  },

"click .js-greeniris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="green";
    box2.style.borderColor="green";
  },

"click .js-blueiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="blue";
    box2.style.borderColor="blue";
  },

"click .js-navyiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="navy";
    box2.style.borderColor="navy";
  },

"click .js-purpleiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="purple";
    box2.style.borderColor="purple";
  },

"click .js-whiteiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="white";
    box2.style.borderColor="white";
  },

"click .js-blackiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="black";
    box2.style.borderColor="black";
  },

"click .js-grayiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="gray";
    box2.style.borderColor="gray";
  },

"click .js-lightblueiris": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.borderColor="lightblue";
    box2.style.borderColor="lightblue";
  },


  //------------------------------pupils
"click .js-redpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="red";
    box2.style.backgroundColor="red";
  },

  "click .js-orangepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";
  },

"click .js-yellowpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="yellow";
    box2.style.backgroundColor="yellow";
  },

"click .js-greenpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="green";
    box2.style.backgroundColor="green";
  },

"click .js-bluepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="blue";
    box2.style.backgroundColor="blue";
  },

"click .js-navypupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="navy";
    box2.style.backgroundColor="navy";
  },

"click .js-purplepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="purple";
    box2.style.backgroundColor="purple";
  },

"click .js-whitepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="white";
    box2.style.backgroundColor="white";
  },

"click .js-blackpupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="black";
    box2.style.backgroundColor="black";
  },

"click .js-graypupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="gray";
    box2.style.backgroundColor="gray";
  },

"click .js-lightbluepupils": function bgRed(){
    var box = document.getElementById("iris1");
    var box2 = document.getElementById("iris2");
    box.style.backgroundColor="lightblue";
    box2.style.backgroundColor="lightblue";
  },



  //----------------------------------------------------mouth-----------------
"click .js-redmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="red";
    box2.style.backgroundColor="red";
  },

  "click .js-orangemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="orange";
    box2.style.backgroundColor="orange";
  },

"click .js-yellowmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="yellow";
    box2.style.backgroundColor="yellow";
  },

"click .js-greenmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="green";
    box2.style.backgroundColor="green";
  },

"click .js-bluemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="blue";
    box2.style.backgroundColor="blue";
  },

"click .js-navymouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="navy";
    box2.style.backgroundColor="navy";
  },

"click .js-purplemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="purple";
    box2.style.backgroundColor="purple";
  },

"click .js-pinkmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="#F7B4B4";
    box2.style.backgroundColor="#F7B4B4";
  },

"click .js-blackmouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="black";
    box2.style.backgroundColor="black";
  },

"click .js-graymouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="gray";
    box2.style.backgroundColor="gray";
  },

"click .js-lightbluemouth": function bgRed(){
    var box = document.getElementById("mouth");
    var box2 = document.getElementById("tounge");
    box.style.backgroundColor="lightblue";
    box2.style.backgroundColor="lightblue";
  },


  //--------------------------------------------leg1.............

  "click .js-redleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="red"
  },

  "click .js-orangeleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="orange"
  },

"click .js-yellowleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="yellow"
  },

"click .js-greenleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="green"
  },

"click .js-blueleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="blue"
  },

"click .js-navyleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="navy"
  },

"click .js-purpleleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="purple"
  },

"click .js-whiteleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="white"
  },

"click .js-blackleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="black"
  },

"click .js-grayleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="gray"
  },

"click .js-lightblueleg1": function bgRed(){
    var box = document.getElementById("leg1");
    box.style.backgroundColor="lightblue"
  },


//===============================================leg2


  "click .js-redleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="red"
  },

  "click .js-orangeleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="orange"
  },

"click .js-yellowleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="yellow"
  },

"click .js-greenleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="green"
  },

"click .js-blueleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="blue"
  },

"click .js-navyleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="navy"
  },

"click .js-purpleleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="purple"
  },

"click .js-whiteleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="white"
  },

"click .js-blackleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="black"
  },

"click .js-grayleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="gray"
  },

"click .js-lightblueleg2": function bgRed(){
    var box = document.getElementById("leg2");
    box.style.backgroundColor="lightblue"
  },


//============leg3
  "click .js-redleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="red"
  },

  "click .js-orangeleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="orange"
  },

"click .js-yellowleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="yellow"
  },

"click .js-greenleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="green"
  },

"click .js-blueleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="blue"
  },

"click .js-navyleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="navy"
  },

"click .js-purpleleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="purple"
  },

"click .js-whiteleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="white"
  },

"click .js-blackleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="black"
  },

"click .js-grayleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="gray"
  },

"click .js-lightblueleg3": function bgRed(){
    var box = document.getElementById("leg3");
    box.style.backgroundColor="lightblue"
  },


  //==========leg4

    "click .js-redleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="red"
  },

  "click .js-orangeleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="orange"
  },

"click .js-yellowleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="yellow"
  },

"click .js-greenleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="green"
  },

"click .js-blueleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="blue"
  },

"click .js-navyleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="navy"
  },

"click .js-purpleleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="purple"
  },

"click .js-whiteleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="white"
  },

"click .js-blackleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="black"
  },

"click .js-grayleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="gray"
  },

"click .js-lightblueleg4": function bgRed(){
    var box = document.getElementById("leg4");
    box.style.backgroundColor="lightblue"
  },

//========================leg5

  "click .js-redleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="red"
  },

  "click .js-orangeleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="orange"
  },

"click .js-yellowleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="yellow"
  },

"click .js-greenleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="green"
  },

"click .js-blueleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="blue"
  },

"click .js-navyleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="navy"
  },

"click .js-purpleleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="purple"
  },

"click .js-whiteleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="white"
  },

"click .js-blackleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="black"
  },

"click .js-grayleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="gray"
  },

"click .js-lightblueleg5": function bgRed(){
    var box = document.getElementById("leg5");
    box.style.backgroundColor="lightblue"
  },
});


