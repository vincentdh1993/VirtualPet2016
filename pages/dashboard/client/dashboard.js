
Template.dashboard.onCreated(function() {
	this.state = new ReactiveDict();
	this.state.setDefault({
   		 w : 100,
       //instance.state.set("lastError","* "+ error.reason)
 	});
});



Template.dashboard.helpers({
	healthValue: function(){
		const instance = Template.instance();
    	return instance.state.get("w");
	}
})


Template.dashboard.events({
	"click .js-clickme": function(event,instance){
		var elem = document.getElementById("myBar");
  		var width = 100;
  		var id = setInterval(frame, 1000);
 		 function frame() {
  			  if (width <= 0) {
  			  	document.getElementById('js-pet').src='images/fig1_melt.gif'
  			     instance.state.set("w",100);
            elem.style.backgroundColor = "green";
            clearInterval(id);
           
  		  } else{
  		  	width--;
   			   elem.style.width = width + '%';
          if(width<=60){
            elem.style.backgroundColor = "yellow";
          }
          if(width<=30){
             elem.style.backgroundColor = "red";
          }
   			   instance.state.set("w",width); 
   			   //Next step: instead of having local variables, push the width value to pet object's field 
   			   //so the timer still does count down in the background
   			   console.dir(width);
   		 }
 	 	}	
	}
})

//original version
// Template.dashboard.helpers({
// 	healthValue: function(){
		
// 	}
// })


// Template.dashboard.events({
// 	"click .js-clickme": function(){
// 		var elem = document.getElementById("myBar");
//   		var width = 1;
//   		var id = setInterval(frame, 10);
//  		 function frame() {
//   			  if (width >= 100) {
//   			    clearInterval(id);
//   		  } else {
//    			   width++;
//     		   elem.style.width = width + '%';
//    		 }
//  	 	}	
// 	}
// })

