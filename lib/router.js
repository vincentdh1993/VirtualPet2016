Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home",data:function(){
	return UserProfile.findOne();
}});
Router.route('comments');
Router.route('showRides');
Router.route('dashboard');
Router.route('commandList');
Router.route('/about', {name: 'about'});
Router.route('/gamecenter', {name: 'game'});
Router.route('/chat', {name: 'chat'});
Router.route('/index', {name: 'index'});
Router.route('/brickbreak', {name: 'brickbreak'});
Router.route('/randomcolor', {name: 'randomcolor'});
Router.route('/math', {name: 'math'});
Router.route('/register', {name: 'register'});
Router.route('/login', {name: 'login'});
Router.route('/welcome', {name: 'registerorlogin'});

Router.route('map');
Router.route('/gameover', {name: 'gameover'});


Router.route('/weather', {name: 'weather'});
Router.route('/dog', {name: 'dog'});
Router.route('/owl', {name: 'owl'});
Router.route('/ghost', {name: 'ghost'});