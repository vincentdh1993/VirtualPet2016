Template.background.onRendered(function() {
    var pet = PetProfile.findOne({petid:Meteor.userId()});
    if(pet.background !== undefined || pet.background !== null){
      $("body").css("background", "url('"+pet.background+"')");
      }
    
})

Template.background.events({
      "click #submit-url": function(){
            var pet = PetProfile.findOne({petid:Meteor.userId()});
            const url = $("#input-url").val();
            console.log(url);
            Meteor.call("addBackground", url);
            $("body").css("background", "url('"+url+"')");
      }
});