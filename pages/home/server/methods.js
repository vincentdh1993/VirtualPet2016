Meteor.methods({
	"getWeather": function(lat, lng){

		const apiKey = Meteor.settings.weatherApiKey;
		const url = "http://api.wunderground.com/api/"+apiKey+"/geolookup/q/"+lat+","+lng+".json"
    	// const url = "http://www.recipepuppy.com/api/?i="+ingr+"&q=&minIngs=&maxIngs=+"+ingrCount+"&minRating=12&minRates=";
    	const z = Meteor.http.call("GET", url);
    	console.log(z);
    	// console.log(lat);
    	// console.log(lng);
    	// return z.content;
  },
})