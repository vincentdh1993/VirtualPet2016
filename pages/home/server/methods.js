Meteor.methods({

	"insertConversation":function(str_obj){
		Conversations.insert(str_obj);
	},

	"getWeather": function(lat, lng){

		const apiKey = Meteor.settings.weatherApiKey;
		const url = "http://api.wunderground.com/api/"+apiKey+"/geolookup/q/"+lat+","+lng+".json"
    	// const url = "http://www.recipepuppy.com/api/?i="+ingr+"&q=&minIngs=&maxIngs=+"+ingrCount+"&minRating=12&minRates=";
    	const initialInformation = Meteor.http.call("GET", url);
      const w = JSON.parse(initialInformation.content);
      
      const state = w.location.state;
      const city = w.location.city;
      const cityInformationURL = "http://api.wunderground.com/api/6329aa3c8124a706/conditions/q/"+state+"/"+city+".json"
      const conditions = Meteor.http.call("GET", cityInformationURL);
      const c = JSON.parse(conditions.content);

      const tempInF = (c.current_observation.temp_f).toString();
      const tempInC = (c.current_observation.temp_c).toString();
      const weatherConditions = c.current_observation.weather;
      const feelsLikeInF = c.current_observation.feelslike_f;
      const humidity = c.current_observation.relative_humidity;

      const finalString = "The weather in "+city+" is "+weatherConditions+ ". It is "+tempInF+" degrees Farenheit and "+tempInC+" degrees Celcius. It feels like "+feelsLikeInF+" degrees with humidity at "+humidity+".";

      // console.log(finalString);
      return finalString;


    	// const y = Meteor.http.call("GET", z.wuiurl);
    	// console.dir(y);
    	//USE THE wuiurl: FIELD IN THE JSON
  
  },
  "getTomorrowsWeather": function(lat, lng){
      const apiKey = Meteor.settings.weatherApiKey;

      const url = "http://api.wunderground.com/api/"+apiKey+"/geolookup/q/"+lat+","+lng+".json"
      // const url = "http://www.recipepuppy.com/api/?i="+ingr+"&q=&minIngs=&maxIngs=+"+ingrCount+"&minRating=12&minRates=";
      const initialInformation = Meteor.http.call("GET", url);
      const w = JSON.parse(initialInformation.content);

      
      const state = w.location.state;
      const city = w.location.city;

      const cityInformationURL = "http://api.wunderground.com/api/"+apiKey+"/forecast10day/q/"+state+"/"+city+".json"
      const forecastContent = Meteor.http.call("GET", cityInformationURL);
      const forecast = JSON.parse(forecastContent.content);
      const tenDayForecast = forecast.forecast.txt_forecast.forecastday;
      const tomorrow = tenDayForecast[0];
      const tomorrowsWeather = (tomorrow.fcttext).replace(/F/g, " degrees Farenheit");
      // const tomorrowsWeatherFinal = tomorrowsWeather.replace(/W/g, "Winds");

      return tomorrowsWeather;
  },
  "getAccessToken": function(){
    return Meteor.settings.accessToken;
  },
  "getBaseUrl": function(){
    return Meteor.settings.baseUrl;
  },
  // "printWeather": function(weatherString){
  //   console.log(weatherString);
  // },

})