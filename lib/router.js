Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
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