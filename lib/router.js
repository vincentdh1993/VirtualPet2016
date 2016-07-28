Router.configure({
	waitOn: function(){
		console.log("start");
		return Meteor.subscribe('theUserProfile');
	},
	layoutTemplate: 'layout',
});


Router.route('dashboard');
Router.route('/gamecenter', {name: 'game'});
Router.route('/brickbreak', {name: 'brickbreak'});
Router.route('/register', {name: 'register'});
Router.route('/shootghost', {name: 'shootghost'});
Router.route('/login', {name: 'login'});
Router.route('/welcome', {name: 'registerorlogin'});
Router.route('/newdodge', {name: 'newdodge'});

Router.route('/showNeighbor/:petid', 
  {name:"showNeighbors",
    data:function(){
      return PetProfile.findOne({petid:this.params.petid});
    } 
  }
);

Router.route('/', {
  name:"home",
  waitOn: function() {
  	return Meteor.subscribe('thePetProfile');
    return Meteor.subscribe('theUserProfile');
  },
  data: function () {
    return UserProfile.findOne();
  }
});


Router.route('/customize', {
	name: 'customize',
	waitOn: function() {
  		return Meteor.subscribe('thePetProfile');
  	},
  	data: function () {
   		return PetProfile.find({petid:Meteor.userId()});
  	},
});


