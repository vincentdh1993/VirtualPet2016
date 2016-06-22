Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('comments');
Router.route('showRides');
Router.route('play');
Router.route('commandList');
Router.route('/about', {name: 'about'});