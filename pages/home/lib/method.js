Meteor.methods({
	"getWeather": function(lat, lng){
		
		const url = "http://api.wunderground.com/api/"+apiKey+"/geolookup/q/37.776289,-122.395234.json"
    	// const url = "http://www.recipepuppy.com/api/?i="+ingr+"&q=&minIngs=&maxIngs=+"+ingrCount+"&minRating=12&minRates=";
    	console.log(url);
    	// const z = Meteor.http.call("get",url);
    	// return z.content;
  },
})