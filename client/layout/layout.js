Template.layout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.call("updateLogoutTime");
        Meteor.logout();
        Router.go('registerorlogin');
    }
});